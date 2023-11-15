import './card.scss'
function Card() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>Our couchs</h2>
      <div className="card">
        <figure>
          <img src="https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/813qu5IW1WL._AC_SL1500_.jpg" alt="couch" />
        </figure>
        <h3>Title</h3>
        <p>50$</p>
      </div>
    </>
  )
}

export default Card