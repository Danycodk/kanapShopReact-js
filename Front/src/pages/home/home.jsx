import './home.scss'
import Card from "./card/card"
function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div className="ourProduct">
          <h2>Our couchs</h2>
        </div>
        <div className="card-div">
          <Card/>
        </div>
      </section>
    </>
  )
}

export default Home