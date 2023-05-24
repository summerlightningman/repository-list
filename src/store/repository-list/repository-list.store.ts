import {create} from "zustand";
import * as repositoryAPI from "../../api/github/repository-list.api"
import {RepositoryListState} from "./types.ts";

const useRepositoryListStore = create<RepositoryListState>()(set => ({
    list: [],
    fetch: async name => {
        const raw = await repositoryAPI.get({ name })
        const list = raw.data.search.edges.map(({ node }) => ({
            name: node.name,
            lastCommittedBy: new Date(node.pushedAt).toLocaleString(),
            starsCount: node.stargazerCount,
            link: node.url
        }))
        return set(() => ({ list }))
    }
}))

export default useRepositoryListStore