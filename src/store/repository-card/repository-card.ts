import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import * as repositoryInfoAPI from '@api/github/repository-info'
import {GetRepositoryInfoQueryParams} from '@api/github/types'
import {RepositoryCardState} from "@store/repository-card/types.ts";

const useRepositoryCardStore = create<RepositoryCardState>()(devtools(set => ({
    isLoading: false,
    name: '',
    description: '',
    starsCount: 0,
    languageCount: 0,
    languageList: [],
    owner: {
        login: '',
        url: '',
        avatarUrl: '',
    },
    fetch: async ({ name, owner }: GetRepositoryInfoQueryParams) => {
        set({ isLoading: true })
        const { data } = await repositoryInfoAPI.get({ name, owner })

        return set({
            isLoading: false,
            name,
            owner: {
                login: data.repository.owner.login,
                url: data.repository.owner.url,
                avatarUrl: data.repository.owner.avatarUrl
            },
            starsCount: data.repository.stargazerCount,
            languageCount: data.repository.languages.totalCount,
            languageList: data.repository.languages.nodes.map(item => item.name)
        })
    }
})))

export default useRepositoryCardStore