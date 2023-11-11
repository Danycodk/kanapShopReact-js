import './App.css'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <p>Product</p>
        <p>Features</p>
        <p>Marketplace</p>
        <p>Company</p>
      </nav>
    </>
  )
}

export default NavBar