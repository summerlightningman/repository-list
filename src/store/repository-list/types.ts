export interface RepositoryListItem {
    name: string
    starsCount: number
    lastCommittedBy: string
    link: string
}

export interface RepositoryListState {
    list: RepositoryListItem[],
    isLoading: boolean
    fetch: (name: string) => void,
}