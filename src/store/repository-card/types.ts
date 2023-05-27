import {GetRepositoryInfoQueryParams} from "@api/github/types.ts";

export interface RepositoryCardState {
    isLoading: boolean,
    name: string,
    description: string,
    starsCount: number,
    languageCount: number,
    languageList: string[],
    owner: {
        login: string,
        url: string,
        avatarUrl: string,
    },
    lastCommitAt: string,
    fetch: (params: GetRepositoryInfoQueryParams) => void
}