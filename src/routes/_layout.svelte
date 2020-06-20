<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: 1fr;
		font-family: proxima-nova, sans-serif;
		font-style: normal;
		font-weight: 100;
	}
</style>

<main>
	<slot></slot>
</main>