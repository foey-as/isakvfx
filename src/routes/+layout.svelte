<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../global.css';

	import { serializeSchema } from '$lib/utils/serializeSchema';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Navbar />
<slot />

<svelte:head>
	{@html serializeSchema({
		'@context': 'https://schema.org/',
		'@type': 'Person',
		name: 'Isak Fjeld Rasmussen',
		url: 'https://www.isakvfx.no/',
	})}
</svelte:head>
