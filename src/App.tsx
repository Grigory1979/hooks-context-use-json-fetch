import FetchRequestErr from "./components/FetchRequestErr"
import FetchRequestLoading from "./components/FetchRequestLoading"
import FetchRequestOk from "./components/FetchRequestOk"



function App() {

  return (
    <>
      <FetchRequestOk />
      <FetchRequestErr />
      <FetchRequestLoading />
    </>
  )
}

export default App