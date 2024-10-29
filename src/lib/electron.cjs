const windowStateManager = require('electron-window-state');
const { app, BrowserWindow, ipcMain } = require('electron');
const serve = require('electron-serve');
const path = require('path');
const waitOn = require('wait-on');

try {
	require('electron-reloader')(module);
} catch (e) {
	console.error(e);
}

const serveURL = serve({ directory: '.' });
const port = process.env.PORT || 5173;
const dev = !app.isPackaged;
let mainWindow;

function createWindow() {
	let windowState = windowStateManager({
		defaultWidth: 1024,
		defaultHeight: 650,
	});

	const mainWindow = new BrowserWindow({
		minWidth: 1024,
		minHeight: 650,
		maxWidth: 1024,
		maxHeight: 650,
		webPreferences: {
			enableRemoteModule: true,
			nodeIntegration: true,
			contextIsolation: false,
			spellcheck: false,
			devTools: dev,
			preload: path.join(__dirname, 'preload.cjs'),
		},
		x: windowState.x,
		y: windowState.y,
		width: windowState.width,
		height: windowState.height,
		// Añade estas opciones para eliminar los mensajes de error del tipo:
		// [ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed
		backgroundColor: '#cccccc',  // O el color que prefieras
		show: false  // No mostrar hasta que esté listo
	});

	windowState.manage(mainWindow);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	mainWindow.on('close', () => {
		windowState.saveState(mainWindow);
	});

	return mainWindow;
}

// function loadVite(port) {
// 	mainWindow.loadURL(`http://localhost:${port}`).catch((e) => {
// 		console.log('Error loading URL, retrying', e);
// 		setTimeout(() => {
// 			loadVite(port);
// 		}, 200);
// 	});
// }
function loadVite(port) {
	waitOn({ resources: [`http://localhost:${port}`] }, (err) => {
	  if (err) {
		console.error('Failed to load Vite server:', err);
		return;
	  }
	  mainWindow.loadURL(`http://localhost:${port}`).catch((e) => {
		console.log('Error loading URL, retrying', e);
		setTimeout(() => {
		  loadVite(port);
		}, 200);
	  });
	});
}

function createMainWindow() {
	mainWindow = createWindow();
	mainWindow.once('close', () => {
		mainWindow = null;
	});

	if (dev) loadVite(port);
	else serveURL(mainWindow);
}

// Opcional: Deshabilitar vsync
app.commandLine.appendSwitch('disable-gpu-vsync');
app.commandLine.appendSwitch('disable-frame-rate-limit');

app.once('ready', createMainWindow);

app.on('activate', () => {
	if (!mainWindow) {
		createMainWindow();
	}
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
