import './App.css'

function ProductDetails() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div className="product-details">
            <h2>Title</h2>
            <p> Price</p>
            <h3>Description</h3>
            <p> cfewfhfoiehfifieifohihf</p>
            <div class="item__content__settings">
                <div class="item__content__settings__color">
                  <label for="color-select">Choisir une couleur :</label>
                  <select name="color-select" id="colors">
                      <option value="">--SVP, choisissez une couleur --</option>
                       <option value="vert">vert</option>
                      <option value="blanc">blanc</option> 
                  </select>
                </div>

                <div class="item__content__settings__quantity">
                  <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                  <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity"/>
                </div>
              </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails