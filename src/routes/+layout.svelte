<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
</script>

<div class="flex h-screen overflow-hidden">
	<Sidebar />
	<main class="flex-1 flex flex-col">
		<div class="flex-1 p-8 overflow-auto">
			<!-- Aquí se renderizan los componentes de cada página -->
			{#key $page.url.pathname}
				<div in:fade={{ duration: 150 }}>
					<slot />
				</div>
			{/key}
		</div>
		<!-- // Footer de la pagina  -->
		<div class="fixed bottom-0 w-full p-4">
			<Footer />
		</div>
	</main>
	<!-- Contenido del div -->
</div>
