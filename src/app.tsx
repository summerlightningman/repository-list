import {FC} from 'react'
import './app.scss'
import List from "./pages/list/list.tsx";

const App: FC = () => {

  return <main className="main">
    <List/>
  </main>
}

export default App
