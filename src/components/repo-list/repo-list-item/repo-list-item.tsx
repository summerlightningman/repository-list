import {FC} from 'react'
import {RepoListItemProps} from '@components/repo-list/repo-list-item/repo-list-item.types.ts'
import {useNavigate} from 'react-router-dom';
import {RouteName} from "../../../../router.tsx";

const RepoListItem: FC<RepoListItemProps> = ({
                                                 name,
                                                 starsCount,
                                                 lastCommittedBy,
                                                 link,
                                                 owner
                                             }) => {
    const navigate = useNavigate()
    const goToRepoCard = (owner: string, name: string) => () =>
        navigate(`${RouteName.RepositoryCard}/${owner}/${name}`)

    return <li className="repo-list__item" onClick={goToRepoCard(owner, name)}>
        <span className="name">{name}</span>
        <span className="stars-count">{starsCount}</span>
        <span className="last-committed-by">{lastCommittedBy}</span>
        <span className="link"><a href={link} target="_blank">{link}</a></span>
    </li>
}

export default RepoListItem