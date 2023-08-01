import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element:<SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element:<Checkout></Checkout>,
  },
]);


function App() {
  return (
    <div className="App">
<RouterProvider router={router} />
    </div>
  );
}

export default App;