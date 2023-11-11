import './App.css'

function Form() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <div class="cart__order__form__question">
            <label for="firstName">Prénom: </label>
            <input type="text" name="firstName" id="firstName" required />
            <p id="firstNameErrorMsg"></p>
        </div>
        <div class="cart__order__form__question">
            <label for="lastName">Nom: </label>
            <input type="text" name="lastName" id="lastName" required/>
            <p id="lastNameErrorMsg"></p>
        </div>
        <div class="cart__order__form__question">
            <label for="address">Adresse: </label>
            <input type="text" name="address" id="address" required/>
            <p id="addressErrorMsg"></p>
        </div>
        <div class="cart__order__form__question">
            <label for="city">Ville: </label>
            <input type="text" name="city" id="city" required/>
            <p id="cityErrorMsg"></p>
        </div>
        <div class="cart__order__form__question">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" required/>
            <p id="emailErrorMsg"></p>
        </div>
        <div class="cart__order__form__submit">
            <input type="submit" value="Commander !" id="order"/>
        </div>
      </form>
    </>
  )
}

export default Form