
import './App.css'
import Car from './Components/Car'
function App() {

  return (
    <>
      <Car props= {{brand: "Mahindra", model: "XUV"}}/>
      <Car props= {{brand: "Toyota", model: "XUV"}}/>
    </>
  )
}

export default App
