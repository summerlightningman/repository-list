export interface RepositoryListItem {
    name: string
    starsCount: number
    lastCommittedBy: string
    link: string
    owner: string
}

export interface RepositoryListState {
    isLoading: boolean
    isError: boolean
    list: RepositoryListItem[],
    pagesCount: number
    fetch: (name: string) => void,
}