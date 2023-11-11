import './App.css'

function CartInCart() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
    <h2>Your Cart</h2>
      <div className="card-in-cart">
        <figure>
            <img src="" alt="" />
        </figure>
        <h3>Title</h3>
        <p>Color</p>
        <div>
            <input type="number" name="" value="" />        
            <p>Remove</p>
        </div>
        <p>Price 33$</p>
      </div>

    </section>
    </>
  )
}

export default CartInCart