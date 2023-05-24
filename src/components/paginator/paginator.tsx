import { FC } from 'react'
import useSearchQueryStore from '@store/search-query/search-query.store';

const Paginator: FC = () => {
    const searchQueryStore = useSearchQueryStore()

    const goToPage = (page: number) => () => searchQueryStore.setPage(page)

    return <section className="paginator">
        {
            Array(10).fill(null).map(
                (_, idx) => <button onClick={goToPage(idx + 1)} key={idx}>{idx + 1}</button>
            )
        }
    </section>
}

export default Paginator