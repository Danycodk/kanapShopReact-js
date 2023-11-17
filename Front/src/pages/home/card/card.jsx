import './card.scss'
import  { useState, useEffect } from 'react';
function Card() {
   const [count, setCount] = useState([])
  useEffect(() => {
    // let ignore = false;
    async function fetchTodoList() {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCount(data);
      } 
      catch (error) {
        console.error('Oops, an error occurred:', error);

      } 
    }
    fetchTodoList();
  }, []);
  console.log('Rendering Card component');

  return (
    <>
      {count.map((couch, index)=>(<div className="card"  key={index}>
        <figure>
          <img  src={couch.imageUrl}  alt="couch" />
            <figcaption>
              <h3> {couch.name}</h3> 
              <p>{couch.price}</p>
            </figcaption>
        </figure>
      </div>)) }

      {/* <div className="card"> */}
        {/* <figure>
          <img src="https://m.media-amazon.com/images/W/AVIF_800250-T3/images/I/813qu5IW1WL._AC_SL1500_.jpg" alt="couch" />
        </figure>
        <div className="description">
          <h3>Title</h3>
          <p>50$</p>
        </div> */}
      {/* </div> */}
    </>
  )
}

export default Card