<!-- src/routes/+page.svelte -->
<script>
	import { goto } from '$app/navigation';
	import Body from '$lib/components/Body.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/dashboard');
	});
</script>

<div class="p-8">Redirigiendo...</div>

<Body />
