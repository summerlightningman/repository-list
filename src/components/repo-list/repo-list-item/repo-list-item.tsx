import {FC} from 'react'
import {RepoListItemProps} from '@components/repo-list/repo-list-item/repo-list-item.types.ts'


const RepoListItem: FC<RepoListItemProps> = ({name, starsCount, lastCommittedBy, link}) => {
    return <li className="repo-list__item">
        <span className="name">{name}</span>
        <span className="stars-count">{starsCount}</span>
        <span className="last-committed-by">{lastCommittedBy}</span>
        <span className="link"><a href={link} target="_blank">{link}</a></span>
    </li>
}

export default RepoListItem