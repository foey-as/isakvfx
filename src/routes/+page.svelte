<script lang="ts">
	import Projects from '$lib/components/Projects.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div
	class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 dark:text-gray-50"
>
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1
			class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400"
		>
			Hei! Jeg er Isak Fjeld Rasmussen
		</h1>
		<p class="mt-6 leading-7 first:mt-0">
			Tekst
		</p>
		<div class="h-[50px]" />
		<h2 class="font-semibold mt-10 border-b pb-1 text-2xl contrast-more:border-neutral-400">
			<a href="/prosjekter">Prosjekter</a>
		</h2>
		<div class="mt-6 leading-7 first:mt-0">
			<Projects projects={data.projects} />
		</div>
	</main>
</div>

<svelte:head>
	<title>Isak Fjeld Rasmussen</title>
	<meta name="title" content="Isak Fjeld Rasmussen" />
	<meta
		name="description"
		content=""
	/>

	<link rel="canonical" href="https://www.isakvfx.no/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.isakvfx.no/" />
	<meta property="og:title" content="Isak Fjeld Rasmussen" />
	<meta
		property="og:description"
		content=""
	/>

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.isakvfx.no/" />
	<meta property="twitter:title" content="Isak Fjeld Rasmussen" />
	<meta
		property="twitter:description"
		content=""
	/>
</svelte:head>
