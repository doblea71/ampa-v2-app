<script>
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app-container flex">
	<Sidebar />
	<div class="main-content flex-1">
		<Header />
		<slot />
		<!-- Aquí se renderizan los componentes de cada página -->
		<Footer />
	</div>
</div>

<style>
	.app-container {
		min-height: 100vh;
	}
</style>
