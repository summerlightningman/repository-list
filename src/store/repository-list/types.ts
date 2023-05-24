export interface RepositoryListItem {
    name: string
    starsCount: number
    lastCommittedBy: string
    link: string
}

export interface RepositoryListState {
    repositoryCount: number
    list: RepositoryListItem[],
    fetch: (name: string) => void,
}