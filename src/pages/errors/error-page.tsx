import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import useRepositoryCardStore from '@store/repository-card/repository-card.ts'
import useRepositoryListStore from '@store/repository-list/repository-list.ts'

import { ErrorProps } from '@pages/errors/types.ts';

import './style.scss'
const ErrorPage: FC<ErrorProps> = ({ text }) => {
    const navigate = useNavigate()
    const { isError: isRepoListError } = useRepositoryListStore()
    const { isError: isCardError} = useRepositoryCardStore()

    if (![isRepoListError, isCardError].some(_ => _)) navigate(-1)

    return <main className="error-page">
        <h1 className="error-page__text">{text}</h1>
    </main>
}

export default ErrorPage