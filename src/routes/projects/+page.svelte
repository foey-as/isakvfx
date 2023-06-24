<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Projects from '$lib/components/Projects.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Navbar home />
<div
	class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 text-gray-50"
>
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400">
			Projects
		</h1>
		<div class="mt-6 leading-7 first:mt-0">
			<Projects projects={data.projects} />
		</div>
	</main>
</div>

<svelte:head>
	<title>Projects | Rasmussen</title>
	<meta name="title" content="Projects | Rasmussen" />
	<meta name="description" content="Here are the projects I've done." />

	<link rel="canonical" href="https://www.isakvfx.no/projects/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.isakvfx.no/projects/" />
	<meta property="og:title" content="Projects | Rasmussen" />
	<meta property="og:description" content="Here are the projects I've done." />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.isakvfx.no/projects/" />
	<meta property="twitter:title" content="Projects | Rasmussen" />
	<meta
		property="twitter:description"
		content="Here are the projects I've done."
	/>
</svelte:head>
