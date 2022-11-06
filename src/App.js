import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Component
import Header from './Components/Header';
import Footer from './Components/Users/Footer/Footer';
import RouteWithUserChatCompnent from './Components/Users/RouteWithUserChatCompnent';

import HomePage from './pages/Homepage';
import LogInPage from './pages/LogInPage';
import RegistrationPage from './pages/RegistrtionPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserProfilePage from './pages/user/UserProfilePage';
import PaymentPage from './pages/PaymentPage';
import { ROUTES } from './Constent';
import ProtectedRoutesComponent from './Components/ProtectedRoutesComponent';

import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route element={<RouteWithUserChatCompnent />}>
					<Route path={ROUTES.ROOT} element={<HomePage />} />
					<Route path={ROUTES.LOGIN} element={<LogInPage />} />
					<Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
					<Route path={ROUTES.PRODUCTS} element={<ProductListPage />} />
					<Route path={ROUTES.PRODUCTS_DETAILS} element={<ProductDetailsPage />} />
					<Route path={ROUTES.CART} element={<CartPage />} />
				</Route>
				<Route element={<ProtectedRoutesComponent admin={false} />}>
					<Route path={ROUTES.USER_CART} element={<UserCartDetailsPage />} />
					<Route path={ROUTES.USER_ORDER} element={<UserOrderDetailsPage />} />
					<Route path={ROUTES.PROFILE} element={<UserProfilePage />} />
					<Route path={ROUTES.USER_ORDERS} element={<UserOrdersPage />} />
				</Route>

				{/*Protected routes for admin*/}
				<Route element={<ProtectedRoutesComponent admin={true} />}>
					<Route path={ROUTES.ADMIN_ANALYTICS} element={<AdminAnalyticsPage />} />
					<Route path={ROUTES.ADMIN_CHAT} element={<AdminChatsPage />} />
					<Route path={ROUTES.ADMIN_CREATE_PRODUCT} element={<AdminCreateProductPage />} />
					<Route path={ROUTES.ADMIN_EDIT_PRODUCT} element={<AdminEditProductPage />} />
					<Route path={ROUTES.ADMIN_ORDER_DETAILS} element={<AdminOrderDetailsPage />} />
					<Route path={ROUTES.ADMIN_ORDERS} element={<AdminOrdersPage />} />
					<Route path={ROUTES.ADMIN_PRODUCTS} element={<AdminProductsPage />} />
					<Route path={ROUTES.ADMIN_USER} element={<AdminUsersPage />} />
					<Route path={ROUTES.ADMIN_EDIT_USER} element={<AdminEditUserPage />} />
				</Route>
				<Route path={'*'} element={<h1>Page Not Found 404</h1>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
