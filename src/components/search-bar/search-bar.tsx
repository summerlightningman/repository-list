import {FC, KeyboardEventHandler, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import useSearchQueryStore from '@store/search-query/search-query.store.ts'
import useRepositoryListStore from '@store/repository-list/repository-list.ts'

import './search-bar.scss'

const SearchBar: FC = () => {
    const { name, setName } = useSearchQueryStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const repositoryListStore = useRepositoryListStore()

    const query = searchParams.get('name') || ''

    useEffect(() => {
        setName(query)
        if (query !== null) repositoryListStore.fetch(query)
    }, [query])

    const handleInput: KeyboardEventHandler<HTMLInputElement> = e =>
        setName(e.currentTarget.value)

    const runSearch = () => {
        if (query === name) return
        setSearchParams({ name: name.trim(), page: '1' })
    }

    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter') runSearch()
    }
    const handleClick = () => runSearch()

    return <section className="search-bar">
        <div className="search-bar__controls">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Type repository name here..."
                disabled={repositoryListStore.isLoading}
                value={name}
                onInput={handleInput}
                onKeyUp={handleKeyUp}
            />
            <button
                className="search-bar__submit"
                disabled={repositoryListStore.isLoading}
                onClick={handleClick}
            >🔍︎</button>
        </div>
    </section>
}

export default SearchBar