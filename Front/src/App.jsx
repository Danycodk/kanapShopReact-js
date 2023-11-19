// import React from 'react';
import { Suspense } from 'react';
import Header from "./layout/header/header"
import Footer from "./layout/footer/footer"
// import PageHeaderBanner from "./componentsGlobal/ui/pageHeaderBanner/pageHeaderBanner"
// import Home from "./pages/home/home"
import { Outlet } from 'react-router-dom';

// import Cart from "./pages/cart/cart"

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
