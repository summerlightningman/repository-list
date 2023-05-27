export interface GetRepositoryListQueryParams {
    name?: string
    count?: number
}

export interface RepositoryListItemRaw {
    node: {
        name: string
        pushedAt: string
        stargazerCount: number,
        url: string
        owner: {
            login: string
        }
    }
}

export interface GetRepositoryListResponse {
    search: {
        edges: RepositoryListItemRaw[]
        repositoryCount: number
    }
}

export interface GetRepositoryInfoQueryParams {
    owner: string
    name: string
}

export interface GetRepositoryInfoResponse {
    repository: {
        description: string
        languages: {
            totalCount: number
            nodes: {
                name: string
            }[]
        }
        owner: {
            avatarUrl: string
            login: string
            url: string
        }
        pushedAt: string
        stargazerCount: number
    }
}