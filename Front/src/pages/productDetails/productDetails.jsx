import './ProductDetails.scss'
import {useParams} from "react-router-dom"
import  { useState, useEffect } from 'react';

function ProductDetails() {
  // const [count, setCount] = useState(0)
// import testImg from "../../assets/images/"
const {productId} = useParams()
const [count, setCount] = useState(null)
useEffect(() => {
  // let ignore = false;
  async function fetchTodoListOne() {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}`);
      // if (!response.ok) {
        // throw new Error('Network response was not ok');
      // }

      const data = await response.json();
      setCount(data);
    } 
    catch (error) {
      console.error('Oops, an error occurred:', error);

    } 
  }
  fetchTodoListOne();
}, [productId]);
// const [inputValueColor, setInputValueColor] = useState('');

// const handleInputChange = (event) => {
//   setInputValueColor(event.target.value);
// };
/////
// const [inputValueQty, setInputValueQty] = useState('');

// const handleInputChangeQty = (event) => {
//   setInputValueQty(event.target.value);
// };
// function handleClick(){
//   let createDataObj = {
//     id_product :  count._id,
//     colorSelect:  inputValueColor,
//     numberSelect:  inputValueQty 
//   } 
//   if (createDataObj.colorSelect == ""){
//     event.preventDefault()
//     alert("Choose a color PLS")
//     return
//   }
//   if(createDataObj.numberSelect < 1 || createDataObj.numberSelect >= 100 || createDataObj.numberSelect != parseInt(createDataObj.numberSelect)){
//     event.preventDefault()
//     alert("Choose a number between 1-100, no letters PLS")
//     return
//   }
// }

  return (
    <>
      <section className="section-productDetails d-flex">
        <div className="product-details">
          <figure>
          {count &&<img src={count.imageUrl} alt=''/> }
          </figure>
          <div className="item__content">
            <div className="item__content__titlePrice">
            {count &&<h1 id="title">{count.name}</h1>}
            {count &&<p>Price : <span id="price">  {count.price}   </span>€</p>}   
            </div>
            <div className="item__content__description">
              <p className="item__content__description__title">Description :</p>
              {count &&<p id="description">  {count.description} </p>}  
            </div>
            <div className="item__content__settings">
              <div className="item__content__settings__color">
                <label htmlFor="color-select">Choose a color :</label>
                <select name="color-select" id="colors"  >
                  <option value="">-- choose one color --</option>
                  {/* {count.map((couch, index)=>(<option value="vert">vert</option> */}

                  {/* )) } */}
                     {/* <option value="vert">vert</option> */}
                    {/* <!-- <option value="vert">vert</option>
                    <option value="blanc">blanc</option> --> */}
                </select>
              </div>
              <div className="item__content__settings__quantity">
                <label htmlFor="itemQuantity">Number article(s) (1-100) :</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity" />
              </div>
            </div>
            <div className="item__content__addButton">
              <button id="addToCart" >Add to cart</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProductDetails