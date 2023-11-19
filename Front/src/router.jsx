// import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import ProductDetails from "./pages/productDetails/productDetails"
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element:<Home /> 
        // lazy(() => import("./pages/home/home")),
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'productDetails',
        element: <ProductDetails/> ,
      },
    ],
  },
]);