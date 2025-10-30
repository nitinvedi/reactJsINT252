function Greeting(props) {
    return <h2>Hello, {props.name}</h2>
}

//parent component
// this is the main component nameed App

export default function App() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
        </div>
    )
}