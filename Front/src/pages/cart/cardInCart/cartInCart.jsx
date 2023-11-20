import './CartInCart.scss'

function CartInCart() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="order">
        <figure>
          <img src="https://m.media-amazon.com/images/I/71TL0ozTlML.jpg" alt="" />
        </figure>
      <div className="description-in-cart">
        <h3>Title</h3>
        <p>Color</p>
        <p>Price 33$</p>
      </div>
      <div className="modification">
          <input type="number" name="" value="" />        
          <i className="fa-solid fa-trash"></i>
      </div>
    </div>
    </>
  )
}

export default CartInCart