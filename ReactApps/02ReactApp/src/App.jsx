import Greeting from './Components/Greeting.jsx'
import './App.css'
import Welcome from './Components/Welcome.jsx'
import Table from './Components/Table.jsx'

function App() {

  return (
    <>
      <Greeting />
      <h1>This should constantly get refreshed</h1>
      <Welcome />
      <Table />
    </>
  )
}

export default App
