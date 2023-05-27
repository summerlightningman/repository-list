import * as repositoryAPI from '@api/github/repository-info.ts'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {RouteName} from "../../../router.tsx";

const Card = () => {
    const { owner, name } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!owner || !name) {
            navigate(RouteName.Search)
            return
        }
        repositoryAPI.get({ owner, name }).then(console.log)
    }, [])

    return <h1>Card works! Repo #</h1>
}

export default Card