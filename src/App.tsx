import {FC, useEffect} from 'react'
import useRepositoryListStore from "./store/repository-list/repository-list.store.ts";

const App: FC = () => {
  const repositoryListStore = useRepositoryListStore()

  useEffect(() => {
    repositoryListStore.fetch("")
  }, [])

  console.log(repositoryListStore)

  return (
    <>

    </>
  )
}

export default App
