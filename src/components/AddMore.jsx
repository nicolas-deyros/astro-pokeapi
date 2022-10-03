import * as React from 'react'
import { useStore } from '@nanostores/react'
import { counter, increaseCounter, decreaseCounter } from '@stores/counter.js'

export default function AddMore({ pokemonNumber }) {
	const count = useStore(counter(pokemonNumber))
	// console.log(pokemonNumber)
	return (
		<div>
			<button onClick={decreaseCounter}>-</button>
			<pre>{count.value}</pre>
			<button onClick={increaseCounter}>+</button>
		</div>
	)
}
