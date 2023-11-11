import './App.css'

function contactFooter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contact-footer">
        <i class="fa-solid fa-shield-dog"></i>
        <p>Phone number: 01 23 45 67 89</p>
        <p>Email: support@gmail.com</p>
        <p>Location: 007 Jhon Doe ave</p>
      </div>
    </>
  )
}

export default contactFooter