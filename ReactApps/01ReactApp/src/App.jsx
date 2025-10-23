import './App.css'
import Add from './Components/Add.jsx'
import Subtract from './Components/Subtract.jsx'
import Multiply from './Components/Multiply.jsx'
import Divide from './Components/Divide.jsx'
function App() {
  
  return (

    <>
      {Add(2, 3)}
      {Subtract(23, 3)}
      {Multiply(20, 3)}
      {Divide(9, 3)}
    </>

  )
}

export default App
