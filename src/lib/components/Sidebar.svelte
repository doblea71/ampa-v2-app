<!-- src/components/Sidebar.svelte -->
<script>
	import { page } from '$app/stores';
</script>

<aside class="w-32 bg-gray-800 flex flex-col items-center py-8 space-y-8">
	<!-- Fijar el texto en la parte superior -->
	<div class="text-green-500 font-bold text-2xl mb-auto">AMPA</div>

	<!-- Alinear los botones al centro -->
	<nav class="flex flex-col items-center space-y-4 flex-grow justify-center">
		<!-- Botones con efecto hover -->
		<a
			href="/dashboard"
			class="p-3 rounded-lg
			hover:text-green-500
			focus:outline-none
			{$page.url.pathname === '/dashboard' ? 'text-green-500' : 'text-white'}"
		>
			<i class="fas fa-home text-5xl" />
		</a>
		<a
			href="/familias"
			class="p-3 rounded-lg
			hover:text-green-500
			focus:outline-none
			{$page.url.pathname === '/familias' ? 'text-green-500' : 'text-white'}"
		>
			<i class="fas fa-users text-5xl" />
		</a>
		<a
			href="/reportes"
			class="p-3 rounded-lg
			hover:text-green-500
			focus:outline-none
			{$page.url.pathname === '/reportes' ? 'text-green-500' : 'text-white'}"
		>
			<i class="fas fa-print text-5xl" />
		</a>
		<a
			href="/configuraciones"
			class="p-3 rounded-lg
			hover:text-green-500
			focus:outline-none
			{$page.url.pathname === '/configuraciones' ? 'text-green-500' : 'text-white'}"
		>
			<i class="fas fa-cog text-5xl" />
		</a>
	</nav>

	<!-- Fijar el botón en la parte inferior -->
	<button
		onclick={() => {
			/* Lógica para cerrar sesión */
		}}
		class="mt-auto p-3 rounded-full bg-gray-700 hover:bg-green-500 active:bg-green-500 focus:outline-none"
	>
		<i class="fas fa-power-off text-5xl" />
	</button>
</aside>
