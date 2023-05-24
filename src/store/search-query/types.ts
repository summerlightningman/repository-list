export interface SearchQueryState {
    name: string
    page: number
    setPage: (page: number) => void
    setName: (name: string) => void
}