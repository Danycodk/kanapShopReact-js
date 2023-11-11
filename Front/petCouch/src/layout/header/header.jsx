import './header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="realHeader">
        <i class="fa-solid fa-shield-dog"></i>
        </div>
      </header>
    </>
  )
}

export default Header