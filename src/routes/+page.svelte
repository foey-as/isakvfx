<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Navbar />
<div class="fixed inset-0 flex items-center justify-center">
  <video autoplay muted loop id="myVideo" class="w-full h-full object-cover">
    <source src="vid.mp4" type="video/mp4">
  </video>
</div>


<svelte:head>
	<title>{data.metadata.pageTitle}</title>
	<meta name="title" content={data.metadata.pageTitle} />
	<meta
		name="description"
		content={data.metadata.description}
	/>

	<link rel="canonical" href="https://www.isakvfx.com/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.isakvfx.com/" />
	<meta property="og:title" content={data.metadata.pageTitle} />
	<meta
		property="og:description"
		content={data.metadata.description}
	/>

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.isakvfx.com/" />
	<meta property="twitter:title" content={data.metadata.pageTitle} />
	<meta
		property="twitter:description"
		content={data.metadata.description}
	/>
</svelte:head>
