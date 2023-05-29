<script lang="ts">
	import Image from '$lib/components/PortableText/Image.svelte';
	import { getDateRange } from '$lib/utils/getDateRange';
	import { urlFor } from '$lib/utils/image';
	import { serializeSchema } from '$lib/utils/serializeSchema';

	import type { PageData } from './$types';

	import { PortableText } from '@portabletext/svelte';

	import { YouTube } from 'sveltekit-embed';


	export let data: PageData;
</script>

<div
	class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 text-gray-50"
>
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400">
			{data.title}
		</h1>
		<div class="my-3 leading-7 first:mt-0">
			{data.description}
		</div>
		<YouTube youTubeId={data.youtube} autoPlay={true} />
		<div
			class="mt-2 flex rounded-lg border py-2 px-4 contrast-more:border-current border-blue-200/30 bg-blue-900/30 text-blue-200"
		>
			<h2 class="font-semibold mr-1">Laget med:</h2>
			<p>{data.technologies}</p>
		</div>
		<div
			class="mt-2 flex rounded-lg border py-2 px-4 contrast-more:border-current border-indigo-200/30 bg-indigo-900/30 text-indigo-200"
		>
			<h2 class="font-semibold mr-1">Tidsperiode:</h2>
			<p>{getDateRange(new Date(data.fromDate), new Date(data.toDate))}</p>
		</div>

		<div class="mt-6 leading-7 first:mt-0">
			<PortableText
				value={data.body}
				components={{
					types: {
						image: Image
					}
				}}
			/>
		</div>
	</main>
</div>

<svelte:head>
	<title>{data.title} / Prosjekter | Rasmussen</title>
	<meta name="title" content={`${data.title} / Prosjekter | Rasmussen`} />
	<meta name="description" content={data.description} />

	<link rel="canonical" href={`https://www.isakvfx.no/prosjekter/${data.slug}`} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://www.isakvfx.no/prosjekter/${data.slug}`} />
	<meta property="og:title" content={`${data.title} / Prosjekter | Rasmussen`} />
	<meta property="og:description" content={data.description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={`https://www.isakvfx.no/prosjekter/${data.slug}`} />
	<meta property="twitter:title" content={`${data.title} / Prosjekter | Rasmussen`} />
	<meta property="twitter:description" content={data.description} />

	{@html serializeSchema({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.title,
		image: [data.mainImage ? urlFor(data.mainImage).url() : undefined],
		author: [
			{
				'@type': 'Person',
				name: 'Isak Fjeld Rasmussen',
			}
		]
	})}
</svelte:head>
