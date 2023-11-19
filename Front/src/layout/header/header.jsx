import './header.scss'
import ContactHeader from './components/contactHeader/contactHeader'
import CartNotification from "./components/cartNotification/cartNotification"
import NavBar from "./components/navBar/navBar" ;
import PageHeaderBanner from "../../componentsGlobal/ui/pageHeaderBanner/pageHeaderBanner"
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
      <PageHeaderBanner />
    </>
  )
}

export default Header