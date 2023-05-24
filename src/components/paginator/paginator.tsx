import { FC } from 'react'
import useSearchQueryStore from '@store/search-query/search-query.store';

import './paginator.scss'

const Paginator: FC = () => {
    const { page, setPage } = useSearchQueryStore()

    const goToPage = (page: number) => () => setPage(page)
    const goToPrevPage = () => page > 1 && setPage(page - 1)
    const goToNextPage = () => page < 10 && setPage(page + 1)
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
                        onClick={goToPage(idx + 1)}
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