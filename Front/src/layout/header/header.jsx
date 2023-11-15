import './header.scss'
import ContactHeader from './components/contactHeader/contactHeader'
import CartNotification from "./components/cartNotification/cartNotification"
import NavBar from "./components/navBar/navBar" ;
function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <ContactHeader/>
        <div className="realHeader">
          <i className="fa-solid fa-leaf"></i>
          {/* <i className="fa-solid fa-bars"></i> */}
          <NavBar/> 
          <CartNotification/>
        </div>

      </header>
    </>
  )
}

export default Header