import {create} from "zustand";
import * as repositoryAPI from "@api/github/repository-list.api"
import {RepositoryListState} from "./types.ts";

const useRepositoryListStore = create<RepositoryListState>()(set => ({
    list: [],
    isLoading: false,
    fetch: async name => {
        set({ isLoading: true })
        const { data } = await repositoryAPI.get({ name })
        const list = data.search.edges.map(({ node }) => ({
            name: node.name,
            lastCommittedBy: new Date(node.pushedAt).toLocaleString(),
            starsCount: node.stargazerCount,
            link: node.url
        }))
        return set({ isLoading: false, list })
    }
}))

export default useRepositoryListStore