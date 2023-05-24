import {FC, KeyboardEventHandler, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import useSearchQueryStore from '@store/search-query/search-query.store.ts'
import useRepositoryListStore from '@store/repository-list/repository-list.store.ts'

import './search-bar.scss'

const SearchBar: FC = () => {
    const { name: nameInput, setName } = useSearchQueryStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const repositoryListStore = useRepositoryListStore()

    const name = searchParams.get('name') || ''

    useEffect(() => {
        setName(name)
        if (name) repositoryListStore.fetch(name)
    }, [name])

    const handleInput: KeyboardEventHandler<HTMLInputElement> = e => setName(e.currentTarget.value)

    const updateQuery = () => {
        if (name === nameInput) return
        setSearchParams({ name: nameInput, page: '1' })
    }

    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter') updateQuery()
    }
    const handleClick = () => updateQuery()

    return <section className="search-bar">
        <div className="search-bar__controls">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Type repository name here..."
                disabled={repositoryListStore.isLoading}
                value={nameInput}
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