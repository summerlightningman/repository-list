import {FC} from "react";
import useRepositoryListStore from "@store/repository-list/repository-list.store.ts";
import {useSearchParams} from "react-router-dom";

const RepoList: FC = () => {
    const repositoryListStore = useRepositoryListStore()
    const [searchParams] = useSearchParams()
    const page = +(searchParams.get('page') || 1)

    const list = repositoryListStore.list.slice((page - 1) * 10, page * 10)

    return <ul>
        {
            list.map(
                item =>
                    <li key={item.link}>{item.name} - {item.starsCount} - {item.lastCommittedBy} - {item.link}</li>
            )
        }
    </ul>
}

export default RepoList