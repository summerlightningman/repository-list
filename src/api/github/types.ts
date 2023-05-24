export interface GetQueryParams {
    name?: string
    count?: number
}

export interface RepositoryListItemRaw {
    node: {
        name: string
        pushedAt: string
        stargazerCount: number,
        url: string
    }
}

export interface GetResponse {
    search: {
        edges: RepositoryListItemRaw[]
        repositoryCount: number
    }
}