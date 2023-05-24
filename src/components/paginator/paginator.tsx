import { FC } from 'react'

import './paginator.scss'
import {useSearchParams} from "react-router-dom";

const Paginator: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = +(searchParams.get('page') || 1)

    const goToPage = (page: number) => {
        if (page >= 1 && page <= 10) setSearchParams({page: String(page)})
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
            Array(10).fill(null).map(
                (_, idx) =>
                    <button
                        className={getButtonClasses(idx + 1)}
                        onClick={handleClick(idx + 1)}
                        key={idx}
                    >
                        {idx + 1}
                    </button>
            )
        }
        <button className="paginator__item" onClick={goToNextPage} key={11}>▶︎</button>
    </section>
}

export default Paginator