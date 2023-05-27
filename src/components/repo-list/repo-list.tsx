import {FC} from 'react'
import useRepositoryListStore from '@store/repository-list/repository-list.ts'
import {useSearchParams} from 'react-router-dom'
import RepoListItem from '@components/repo-list/repo-list-item/repo-list-item.tsx'
import LoaderRing from '@components/loader/loader-ring.tsx';

import './repo-list.scss'

const RepoList: FC = () => {
    const repositoryListStore = useRepositoryListStore()
    const [searchParams] = useSearchParams()
    const page = +(searchParams.get('page') || 1)

    const list = repositoryListStore.list.slice((page - 1) * 10, page * 10)

    return repositoryListStore.isLoading
        ? <div className="repo-list__loading"><span>.....Loading....</span><LoaderRing/></div>
        : <ul className="repo-list">{list.map(item => <RepoListItem key={item.link} {...item} />)}</ul>
}

export default RepoList