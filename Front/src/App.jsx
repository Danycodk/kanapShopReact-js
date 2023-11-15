// import React from 'react';
import Header from "./layout/header/header"
import Footer from "./layout/footer/footer"
import PageHeaderBanner from "./componentsGlobal/ui/pageHeaderBanner/pageHeaderBanner"
import Home from "./pages/home/home"

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PageHeaderBanner/>
      <Home/>
      <Footer />
    </>
  )
}

export default App
