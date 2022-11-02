import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import LogInPage from "./pages/LogInPage";
import RegistrationPage from "./pages/RegistrtionPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import PaymentPage from "./pages/PaymentPage";
import {ROUTES} from './Constent'
import ProtectedRoutesComponent from "./Components/ProtectedRoutesComponent";

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
      <Route element ={<ProtectedRoutesComponent/>}>
        <Route path = { ROUTES.USER_CART } element={<UserCartDetailsPage/>}/>
        <Route path = { ROUTES.USER_ORDER } element={<UserOrderDetailsPage/>}/>
        <Route path = { ROUTES.PROFILE } element={<UserProfilePage/>}/>
        <Route path = { ROUTES.USER_ORDERS } element={<UserOrdersPage/>}/>
      </Route>
      <Route path = {'*' } element = {<h1>Page Not Found 404</h1>}/>
     </Routes>
    </BrowserRouter>       
  )
    
}

export default App;
