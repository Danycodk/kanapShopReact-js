import './ProductDetails.scss'

function ProductDetails() {
  // const [count, setCount] = useState(0)
// import testImg from "../../assets/images/"
  return (
    <>
      <section>
        <div className="product-details">
          <figure>
            <img src="https://m.media-amazon.com/images/I/71TL0ozTlML.jpg" />
          </figure>
          <div className="item__content">
            <div className="item__content__titlePrice">
              {/* <h1 id="title"><!-- Nom du produit --></h1> */}
              <p>Price : <span id="price">{/*<!-- 42 -->*/}</span>€</p>   {/* */}
            </div>
            <div className="item__content__description">
              <p className="item__content__description__title">Description :</p>
              <p id="description">  {/* <!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. -->*/} </p>
            </div>
            <div className="item__content__settings">
              <div className="item__content__settings__color">
                <label htmlFor="color-select">Choose a color :</label>
                <select name="color-select" id="colors">
                    <option value="">-- choose one color --</option>
                    {/* <!-- <option value="vert">vert</option>
                    {/* <!-- <option value="vert">vert</option>
                    <option value="blanc">blanc</option> --> */}
                </select>
              </div>
              <div className="item__content__settings__quantity">
                <label htmlFor="itemQuantity">Number article(s) (1-100) :</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity"/>
              </div>
            </div>
            <div className="item__content__addButton">
              <button id="addToCart">Add to cart</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProductDetails