import './App.css'
import Car from './Components/Car'
import Greeting from './Components/Greeting'
import UserCard from './Components/UserCard'

function App() {
  return (
    <>
      <Greeting name="Nitin Chaturvedi" age="21"/>
      <hr />
      <Car props= {{brand: "Mahindra", model: "XUV"}}/>
      <Car props= {{brand: "Toyota", model: "XUV"}}/>
      <hr />
      <UserCard Username="nitin" Email="nitin@fmail.com" Country="INdia" />
    </>
  )
}

export default App
