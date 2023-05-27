import {createBrowserRouter} from 'react-router-dom'
import App from './src/app'
import List from './src/pages/list/list'
import Card from './src/pages/card/card'

export enum RouteName {
    Search = '/search',
    RepositoryCard = '/repository'
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: RouteName.Search,
                element: <List/>
            },
            {
                path: `${RouteName.RepositoryCard}/:owner/:name`,
                element: <Card/>
            }
        ]
    }
])