import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {RouteName} from "../../../router.tsx";
import useRepositoryCardStore from "@store/repository-card/repository-card.ts";

const Card = () => {
    const navigate = useNavigate()
    const { name, owner } = useParams()
    const { isLoading, fetch: getRepositoryInfo } = useRepositoryCardStore()

    useEffect(() => {
        if (!name || !owner) {
            navigate(RouteName.Search)
            return
        }

        getRepositoryInfo({ name, owner })
    }, [name, owner, getRepositoryInfo, navigate])

    return <main className="card">
        {isLoading ? 'Loading...' : 'LOADED!'}
    </main>
}

export default Card