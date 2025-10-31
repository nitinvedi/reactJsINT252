
export default function Car({props}) {
    const brand = props.brand;
    const model = props.model;
  return (
    <div>
        <h2>My Car</h2>
        <p>{brand} {model}</p>
    </div>
  )
}
