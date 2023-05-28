import {createBrowserRouter} from 'react-router-dom'
import App from './src/app'
import List from './src/pages/list/list'
import Card from './src/pages/card/card'
import ErrorPage from "@pages/errors/error-page.tsx";

export enum RouteName {
    Search = '/search',
    RepositoryCard = '/repository',
    Error404 = '*'
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
            },
            {
                path: RouteName.Error404,
                element: <ErrorPage text="Error 404: Page not found"/>
            }
        ]
    },
])