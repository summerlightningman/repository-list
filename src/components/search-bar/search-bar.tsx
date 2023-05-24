import {FC, KeyboardEventHandler} from "react";
import useSearchQueryStore from "../../store/search-query/search-query.store.ts";
import useRepositoryListStore from "../../store/repository-list/repository-list.store.ts";

const SearchBar: FC = () => {
    const searchQueryStore = useSearchQueryStore()
    const repositoryListStore = useRepositoryListStore()

    const handleInput: KeyboardEventHandler<HTMLInputElement> = e => {
        searchQueryStore.setName(e.currentTarget.value)
    }
    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter') repositoryListStore.fetch(searchQueryStore.name)
    }

    return <input type="text" value={searchQueryStore.name} onInput={handleInput} onKeyUp={handleKeyUp}/>
}

export default SearchBar