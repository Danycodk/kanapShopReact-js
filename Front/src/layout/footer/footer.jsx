import './footer.scss'
import ContactFooter from "./contactFooter/contactFooter"
import Copyright from "./copyright/Copyright"
function Footer() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <footer>
      <ContactFooter />
      <Copyright />
    </footer>
    </>
  )
}

export default Footer