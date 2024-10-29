// use the exposed API in the renderer
window.myAPI.doAThing();

window.myAPI;

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`


const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

func()