<script lang='ts'>
	import Item from '../_lib/Item/Item.svelte'
	import { wait } from '$lib'
	import Example from '$examples/_lib/Item/Example.svelte'
	import Params, { type Param } from '$examples/_lib/Item/Params.svelte'
	const example = `<script>
	import { wait } from 'fractils'
    
    let ready, set, go
	async function start() {
		ready = true
		await wait(500)
		set = true
		await wait(500)
		go = true
	}
<\/script>
`

	let ready = false, set = false, go = false
	async function start() {
		ready = true
		await wait(500)
		set = true
		await wait(500)
		go = true
		await wait(1500)
		ready = false
		set = false
		go = false
	}

	const path = 'utils/wait.ts'

	const params: Param[] = [
		{
			type: 'param',
			title: 't',
			description: 'Time to wait in ms.',
		},
		{
			type: 'returns',
			description: 'A promise that resolves after <span class="code inline">t</span> ms.',
		},
	]
</script>

<Item title="wait" type="function" {path}>
	<div slot="description">
		A simple wait timer.
		<Params {params} --width="110px" />
	</div>

	<Example {example} --h="332px">
		<div class="result">
			<p class:active={ready}>ready</p>
			<p class:active={set}>set</p>
			<p class:active={go}>go</p>
		</div>
	</Example>
	<button on:click={() => start()}>start()</button>
</Item>

<style>
	p {
		text-align: center;
	}

	.active {
		color: green;
	}
</style>
