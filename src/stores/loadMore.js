import { atom } from 'nanostores'

const initialValue = { value: 15 }

const loadMore = atom(initialValue)

const increaseLoadMore = () => loadMore.set({ value: loadMore.get().value + 5 })

export { loadMore, increaseLoadMore }
