import './form.scss'

function Form() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <div className="cart__order__form__question">
            <label htmlFor="email">Email adress: </label>
            <input type="email" name="email" id="email" required/>
            <p id="emailErrorMsg"></p>
        </div>
        <div className="cart__order__form__question">
            <label htmlFor="firstName">First name: </label>
            <input type="text" name="firstName" id="firstName" required />
            <p id="firstNameErrorMsg"></p>
        </div>
        <div className="cart__order__form__question">
            <label htmlFor="lastName">Last name: </label>
            <input type="text" name="lastName" id="lastName" required/>
            <p id="lastNameErrorMsg"></p>
        </div>
        <div className="cart__order__form__question">
            <label htmlFor="address">Adress: </label>
            <input type="text" name="address" id="address" required/>
            <p id="addressErrorMsg"></p>
        </div>
        <div className="cart__order__form__question">
            <label htmlFor="city">City: </label>
            <input type="text" name="city" id="city" required/>
            <p id="cityErrorMsg"></p>
        </div>
        <div className="cart__order__form__submit">
            <input type="submit" value="Commander !" id="order"/>
        </div>
      </form>
    </>
  )
}

export default Form