import { FC } from 'react';

import SearchBar from '@components/search-bar/search-bar.tsx'
import RepoList from '@components/repo-list/repo-list.tsx'
import Paginator from '@components/paginator/paginator.tsx'

import './list.scss'

const List: FC = () => {
    return <div className="list">
        <SearchBar/>
        <RepoList/>
        <Paginator/>
    </div>
}

export default List