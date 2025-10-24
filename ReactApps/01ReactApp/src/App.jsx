import './App.css'
import Add from './Components/Add.jsx'
import Subtract from './Components/Subtract.jsx'
import Multiply from './Components/Multiply.jsx'
import Divide from './Components/Divide.jsx'
function App() {
  
  return (

    <>
      <div className="bg-amber-500">
        {Add(2, 3)}
      </div>
      <div className='bg-green-300'> {Subtract(23, 3)} </div>
      <div className='bg-red-300'> {Multiply(20, 3)} </div>
      <div className='bg-blue-300'> {Divide(9, 3)} </div>
    </>

  )
}

export default App
