import {useNavigate, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {RouteName} from '../../../router.tsx'
import useRepositoryCardStore from '@store/repository-card/repository-card.ts'

import './card.scss'
import LoaderRing from "@components/loader/loader-ring.tsx";

const Card = () => {
    const navigate = useNavigate()
    const { name, owner } = useParams()
    const {
        isLoading,
        fetch: getRepositoryInfo,
        owner: {avatarUrl, url, login},
        name: repoName,
        description,
        starsCount,
        languageCount,
        languageList,
        lastCommitAt
    } = useRepositoryCardStore()

    useEffect(() => {
        if (!name || !owner) {
            navigate(RouteName.Search)
            return
        }
        getRepositoryInfo({ name, owner })
    }, [name, owner, getRepositoryInfo, navigate])

    const goBack = () => navigate(-1)

    return <main className="card">
        {
            isLoading
            ? <div className="card__loader"><span>.....Loading....</span><LoaderRing/></div>
                : <div className="card__repo-info">
                    <button className="card__back-btn" onClick={goBack}>←<br/>Go back</button>
                    <section className="card__repo-section">
                        <div className="flex-space-between">
                            <h1 className="repo-name">{repoName}</h1>
                            <span className="stars-count">{starsCount}</span>
                        </div>
                        <p className="card__last-commit-at">Last commit at: {lastCommitAt}</p>
                        {
                            languageCount && <p className="language-list">
                                Languages: {
                                    languageList.map(lang => <span className="language-list__item">{lang}</span>)
                                }
                            </p>
                        }
                        <p className="card__repo-description">{description || '[no description]'}</p>
                    </section>
                    <img src={avatarUrl} alt={url} className="card__avatar"/>
                    <section className="card__user-info">
                        <a className="card__user-nickname" href={url} target="_blank">{login}</a>
                    </section>
                </div>
        }
    </main>
}

export default Card