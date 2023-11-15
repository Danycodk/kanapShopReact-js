import './PageHeaderBanner.scss'
import bullDog from "../../../assets/images/bull-dog.jpg"
import christmasCat from "../../../assets/images/christmas-puppy.jpg"
import dog from "../../../assets/images/dog.jpg"
import katowisePuppy from "../../../assets/images/katowice-puppy.jpg"
import modelDog from "../../../assets/images/model-dog.jpg"
function PageHeaderBanner() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <div className="page-Header">
            <h1>We all deserve a good sleep</h1>
            <p>Transform your living space into a haven for both you and
                your furry friend with our specially crafted pet couches, 
                designed for ultimate comfort and style.
                Indulge in the perfect blend of elegance and pet-friendly
                functionality with our exquisite collection of pet couches,
                ensuring a harmonious balance between chic home décor and
                your pet`s well-being.</p>
        </div>
        <div className="images-tiles">
            <div className="first-image-div">
              <img src={bullDog} alt="cute cat sleeping"/>
            </div>
            <div className="seconde-image-div">
              <img src={katowisePuppy} alt="cute cat sleeping"/>
              <img src={modelDog} alt=" model dog" />
            </div>
            <div className="third-image-div">
              <img src={christmasCat} alt="cute cat sleeping"/>
              <img src={dog} alt="cute cat sleeping"/>
            </div>
        </div>
      </article>
    </>
  )
}

export default PageHeaderBanner