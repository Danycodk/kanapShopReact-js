import "./cart.scss"
import CardInCart from "./cardInCart/cartInCart"
import Form from "../../componentsGlobal/form/form"
function Cart() {
    //  const [count, setCount] = useState(0)
  
    return (
      <>
      <section className="section-cart">
        <div className="order-summary">
          <h2>Order summary</h2>
          <CardInCart />
        </div>
        <div className="contact-information">
          <h2> Contact information</h2>
          <Form />
        </div>
      </section>
      </>
    )
  }
  
  export default Cart