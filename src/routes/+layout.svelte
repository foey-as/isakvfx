<script lang="ts">
	import '../global.css';

	import { serializeSchema } from '$lib/utils/serializeSchema';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<svelte:head>
	{@html serializeSchema({
		'@context': 'https://schema.org/',
		'@type': 'Person',
		name: 'Isak Fjeld Rasmussen',
		url: 'https://www.isakvfx.com/',
	})}
</svelte:head>
