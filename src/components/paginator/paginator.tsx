import { FC } from 'react'

import './paginator.scss'
import {useSearchParams} from "react-router-dom";
import useRepositoryListStore from "@store/repository-list/repository-list.store.ts";

const Paginator: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { isLoading, pagesCount } = useRepositoryListStore()
    const page = +(searchParams.get('page') || 1)

    const goToPage = (page: number) => {
        if (page >= 1 && page <= pagesCount) {
            searchParams.set('page', String(page))
            setSearchParams(searchParams)
        }
    }
    const handleClick = (page: number) => () => goToPage(page)
    const goToPrevPage = () => goToPage(page - 1)
    const goToNextPage = () => goToPage(page + 1)
    const getButtonClasses = (pageNum: number) => {
        const classes = ['paginator__item']
        if (pageNum === page) classes.push('paginator__item--active')
        return classes.join(' ')
    }

    return <section className="paginator">
        <button className="paginator__item" onClick={goToPrevPage} key={-1}>◀︎</button>
        {
            Array(pagesCount).fill(null).map(
                (_, idx) =>
                    <button
                        className={getButtonClasses(idx + 1)}
                        onClick={handleClick(idx + 1)}
                        key={idx}
                        disabled={isLoading}
                    >
                        {idx + 1}
                    </button>
            )
        }
        <button className="paginator__item" onClick={goToNextPage} key={pagesCount + 1}>▶︎</button>
    </section>
}

export default Paginator