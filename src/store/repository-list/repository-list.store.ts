import {create} from "zustand";
import * as repositoryAPI from "../../api/github/repository-list.api"
import {RepositoryListState} from "./types.ts";

const repositoryListStore = create<RepositoryListState>()(set => ({
    repositoryCount: 0,
    list: [],
    fetchList: async name => {
        const raw = await repositoryAPI.get({ name })
        const repositoryCount = raw.data.search.repositoryCount
        const list = raw.data.search.edges.map(({ node }) => ({
            name: node.name,
            lastCommittedBy: node.pushedAt,
            starsCount: node.stargazerCount,
            link: node.url
        }))
        return set(() => ({ repositoryCount, list }))
    }
}))

export default repositoryListStore