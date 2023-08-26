<script lang="ts">

	export let home: boolean = false;

</script>

<div class="nav-container text-gray-100">
	<div
		class="nav-container-blur w-full h-full bg-[hsla(0,0%,7%,.8)!important] shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]"
	/>
	<nav class="h-[4rem] mx-auto flex max-w-[90rem] items-center justify-end gap-2 px-[1.5rem]">
		<a class="flex items-center hover:opacity-75 mr-auto" href="/">
			<img src="/logo.png" class="h-8" alt="">
			<b>{home ? 'Home' : 'Portfolio'}</b>
		</a>
		<a href="/contact" class="hover:underline underline-offset-4">Contact</a>
	</nav>
</div>

<style>
	.nav-container {
		background-color: transparent;
		width: 100%;
		z-index: 20;
		top: 0;
		position: -webkit-sticky;
		position: sticky;
		display: block;
	}

	.nav-container-blur {
		z-index: -1;

		position: absolute;
		pointer-events: none;

		backdrop-filter: blur(12px);
		background-color: hsla(0, 0%, 100%, 0.85);

		--shadow: 0 2px 4px rgba(0, 0, 0, 0.02), 0 -1px 0 rgba(0, 0, 0, 0.06) inset;
		--ring-offset-shadow: 0 0 transparent;
		--ring-offset-shadow: 0 0 transparent;
		box-shadow: var(--shadow, 0 0 transparent), var(--ring-shadow, 0 0 transparent), var(--shadow);
	}
</style>
