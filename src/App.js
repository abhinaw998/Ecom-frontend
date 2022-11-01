import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import LogInPage from "./pages/LogInPage";
import RegistrationPage from "./pages/RegistrtionPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import {ROUTES} from './Constent'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path = { ROUTES.ROOT } element={<HomePage/>}/>
      <Route path =  { ROUTES.LOGIN }  element={<LogInPage/>}/>
      <Route path = { ROUTES.REGISTRATION }  element={<RegistrationPage/>}/>
      <Route path = { ROUTES.PRODUCTS }  element={<ProductListPage/>}/>
      <Route path = { ROUTES.PRODUCTS_DETAILS }  element={<ProductDetailsPage/>}/>
      <Route path = { ROUTES.CART } element={<CartPage/>}/>
      <Route path = {'*' } element={<h1>Page Not Found 404</h1>}/>
     </Routes>
    </BrowserRouter>
  )
    
}

export default App;
