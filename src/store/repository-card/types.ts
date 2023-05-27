import {GetRepositoryInfoQueryParams} from "@api/github/types.ts";

export interface RepositoryCardState {
    isLoading: boolean,
    name: string,
    description: string,
    starsCount: number,
    languageCount: number,
    languageList: string[],
    owner: {
        name: string,
        url: string,
        avatarUrl: string,
    },
    fetch: (params: GetRepositoryInfoQueryParams) => void
}