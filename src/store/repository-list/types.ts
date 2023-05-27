export interface RepositoryListItem {
    name: string
    starsCount: number
    lastCommittedBy: string
    link: string
    owner: string
}

export interface RepositoryListState {
    list: RepositoryListItem[],
    isLoading: boolean
    pagesCount: number
    fetch: (name: string) => void,
}