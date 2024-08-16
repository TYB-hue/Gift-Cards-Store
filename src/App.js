import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ChickOut from "./pages/ChickOut";
import ProductDetail from "./pages/productDetail";
import About from './pages/About';
import ProductList from "./components/ProductList";
import Payment from "./pages/PaymentPage/payment";
import SuccessPage from "./components/SuccessPage";

const App = () => {return (
<>

<BrowserRouter>
  <Routes>
  <Route path="/success" element={<SuccessPage />}/>
  <Route path="/PaymentPage/payment/:name" element={<Payment/>}/>
  <Route path="/productList" element={<ProductList/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/ChickOut" element={<ChickOut/>}/>
    <Route path="/productDetail" element={<ProductDetail/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
</BrowserRouter>
</>)}

export default App;
