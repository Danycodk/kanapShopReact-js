import './App.css'

function PageHeaderBanner() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <div className="page-Header">
            <h1>We all deserve <span>a good sleep</span></h1>
            <p>Transform your living space into a haven for both you and
                your furry friend with our specially crafted pet couches, 
                designed for ultimate comfort and style.
                Indulge in the perfect blend of elegance and pet-friendly
                functionality with our exquisite collection of pet couches,
                ensuring a harmonious balance between chic home décor and
                your pet's well-being.</p>
        </div>
        <div className="images-tiles">
            <img src="" alt="cute cat sleeping"/>
            <img src="" alt="cute cat sleeping"/>
            <img src="" alt="cute cat sleeping"/>
            <img src="" alt="cute cat sleeping"/>
        </div>
      </article>
    </>
  )
}

export default PageHeaderBanner