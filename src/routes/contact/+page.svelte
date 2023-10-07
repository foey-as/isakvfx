<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar home />
<div
	class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 text-gray-50"
>
	<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8">
		<h1 class="font-semibold mt-10 border-b pb-1 text-3xl contrast-more:border-neutral-400">
			Contact
		</h1>
      <p class="mt-6 leading-7 first:mt-0">Mail: <a class="hover:underline underline-offset-4" href="mailto:ifjeldr@icloud.com">ifjeldr@icloud.com</a></p>
      <p class="leading-7">Phone: <a class="hover:underline underline-offset-4" href="tel:+4745502797">+47 455 02 797</a></p>
	</main>
</div>

<svelte:head>
	<title>Contact | Rasmussen</title>
	<meta name="title" content="Contact | Rasmussen" />

	<link rel="canonical" href="https://www.isakvfx.com/contact/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.isakvfx.com/contact/" />
	<meta property="og:title" content="Contact | Rasmussen" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.isakvfx.com/contact/" />
	<meta property="twitter:title" content="Contact | Rasmussen" />
</svelte:head>
