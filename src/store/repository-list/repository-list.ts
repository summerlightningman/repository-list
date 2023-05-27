import {create} from 'zustand'
import * as repositoryAPI from '@api/github/repository-list.api'
import {RepositoryListState} from './types.ts'
import {devtools} from 'zustand/middleware';

const useRepositoryListStore = create<RepositoryListState>()(devtools(set => ({
    list: [],
    isLoading: false,
    pagesCount: 0,
    fetch: async name => {
        set({ isLoading: true })
        const { data } = await repositoryAPI.get({ name })
        const list = data.search.edges.map(({ node }) => ({
            name: node.name,
            lastCommittedBy: new Date(node.pushedAt).toLocaleString(),
            starsCount: node.stargazerCount,
            link: node.url,
            owner: node.owner.login
        }))
        const pagesCount = Math.ceil(list.length / 10) || 1
        return set({ isLoading: false, list, pagesCount })
    }
})))

export default useRepositoryListStore