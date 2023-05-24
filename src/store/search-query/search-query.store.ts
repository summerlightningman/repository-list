import {create} from "zustand";
import {SearchQueryState} from "./types.ts";

const useSearchQueryStore = create<SearchQueryState>()(set => ({
    name: "",
    page: 1,
    setPage: page => set({ page }),
    setName: name => set({ name })
}))

export default useSearchQueryStore