import {FC} from "react";
import SearchBar from "../../components/search-bar/search-bar.tsx";
import Paginator from "../../components/paginator/paginator.tsx";

const List: FC = () => {
    return <div className="list">
        <SearchBar/>
        <Paginator/>
    </div>
}

export default List