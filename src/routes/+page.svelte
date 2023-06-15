<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Projects from '$lib/components/Projects.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Navbar />
<div
	class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 text-gray-50"
>
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1
			class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400"
		>
			{data.metadata.heading}
		</h1>
		<div class="mt-6 leading-7 first:mt-0 flex-col flex md:flex-row justify-between">
			<p class="">
				{data.metadata.description}
			</p>
			<img src="/logo.png" class="w-64 mx-auto md:m-0" alt="logo">
		</div>
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
	<title>{data.metadata.pageTitle}</title>
	<meta name="title" content={data.metadata.pageTitle} />
	<meta
		name="description"
		content={data.metadata.description}
	/>

	<link rel="canonical" href="https://www.isakvfx.no/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.isakvfx.no/" />
	<meta property="og:title" content={data.metadata.pageTitle} />
	<meta
		property="og:description"
		content={data.metadata.description}
	/>

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.isakvfx.no/" />
	<meta property="twitter:title" content={data.metadata.pageTitle} />
	<meta
		property="twitter:description"
		content={data.metadata.description}
	/>
</svelte:head>
