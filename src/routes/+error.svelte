<script lang="ts">
	import FourOhFour from '../examples/_lib/FourOhFour.svelte'
	import { dev } from '$app/environment'
	import { log } from '$lib/utils/log'
	import { page } from '$app/stores'

	if (dev) console.log($page.error)

	log('Testing 123', 'red', '#123')
</script>

<template lang="pug">
	
	FourOhFour
	
	+if('dev && $page.status != "404"')
		h1 {$page.status}

		.error
			pre.message {$page.error.message}
			pre.stack {$page.error.stack.split($page.error.message)[1]}

</template>

<a href="/">go back</a>

<slot />

<style lang="scss">
	a {
		display: flex;

		width: max-content;
		margin: -5rem auto 0 auto;

		font-size: 1.5rem;
		text-align: center;

		color: var(--dark-a, slategray);
		text-decoration-skip-ink: auto;
		text-decoration-color: #ffffff50;
	}

	h1 {
		margin-top: 15vh;

		color: var(--warn);

		font-size: 10rem;
		font-weight: 100;
		text-align: center;
	}

	.error {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 10vh;
		text-align: center;

		pre {
			max-width: 90vw;

			text-align: left;
			line-height: 1.5rem;
		}

		.message {
			width: max-content;
			height: max-content;
			margin: 1rem auto;
			padding: 1rem;

			color: var(--dark-d);
			background: transparent;
			border: 1px solid var(--light-d);
			border-radius: var(--radius-lg);
		}

		.stack {
			color: rgba(var(--dark-d-rgb), 0.5);
			max-height: 40vh;
			overflow-y: auto;
		}

		::-webkit-scrollbar {
			background-color: var(--light-a);
			width: 10px;
			height: 10px;
		}
		::-webkit-scrollbar-thumb {
			background-color: rgba(var(--light-d-rgb), 0.5);
			border-radius: 5px;
		}
		::-webkit-scrollbar-track {
			background-color: rgba(var(--light-d-rgb), 0.1);
		}
		::-webkit-scrollbar-corner {
			background-color: rgba(var(--light-d-rgb), 0.1);
		}
	}
</style>
