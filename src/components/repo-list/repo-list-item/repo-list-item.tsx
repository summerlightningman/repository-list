import {FC} from 'react'
import {RepoListItemProps} from '@components/repo-list/repo-list-item/repo-list-item.types.ts'


const RepoListItem: FC<RepoListItemProps> = ({name, starsCount, lastCommittedBy, link}) => {
    return <li className="repo-list__item">
        {name} - {starsCount} - {lastCommittedBy} - {link}
    </li>
}

export default RepoListItem