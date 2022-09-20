import { useStore } from '@nanostores/react'
import { loadMore, increaseLoadMore } from '../stores/loadMore.js'

export default function LoadMoreBtn() {
	const load = useStore(loadMore)
	const name = 'React'

	return (
		<div>
			<button onClick={increaseLoadMore}>Add More Pokemons</button>
			<pre>{load.value}</pre>
		</div>
	)
}
