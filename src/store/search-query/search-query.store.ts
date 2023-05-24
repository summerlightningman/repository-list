import {create} from "zustand";
import {SearchQueryState} from "./types.ts";

const useSearchQuery = create<SearchQueryState>()(set => ({
    name: "",
    page: 1,
    setPage: page => set({ page }),
    setName: name => set({ name })
}))

export default useSearchQuery