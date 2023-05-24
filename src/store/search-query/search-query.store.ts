import {create} from 'zustand'
import {SearchQueryState} from './types.ts'
import {devtools} from 'zustand/middleware'

const useSearchQueryStore = create<SearchQueryState>()(devtools(set => ({
    name: "",
    page: 1,
    setPage: page => set({ page }),
    setName: name => set({ name })
})))

export default useSearchQueryStore