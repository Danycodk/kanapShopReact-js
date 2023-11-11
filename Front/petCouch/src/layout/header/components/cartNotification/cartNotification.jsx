import './App.css'

function CartNotification() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-notification">
        <pan>0</pan>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </>
  )
}

export default CartNotification