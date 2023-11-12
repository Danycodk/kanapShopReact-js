import './App.css'

function card() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Our couchs</h2>
      <div className="card">
        <h3>Title</h3>
        <p>50$</p>
      </div>
    </>
  )
}

export default card