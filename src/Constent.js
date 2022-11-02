export const ROUTES ={
 //publlic routes
 ROOT : "/",
 HOME : '/home',
 LOGIN :'/log-in',
 REGISTRATION :'/registration',
 PRODUCTS : '/products',
 PRODUCTS_DETAILS: 'products/:id',
 CART : '/cart',
 //Auteheticated user rutes
 PROFILE:'/profile',
 USER_CART:'/user/cart-details',
 USER_ORDER:'/user/order/:orderId',
 USER_ORDERS:'/user/orders/:userId',

 //Admin routes
 ADMIN_USER : '/admin/user',
 ADMIN_PRODUCTS : '/admin/products',
 ADMIN_ORDERS : '/admin/orders',
 ADMIN_ORDER_DETAILS : '/admin/order-details',
 ADMIN_EDIT_PRODUCT : '/admin/edit-product',
 ADMIN_CREATE_PRODUCT : '/admin/creat-product',
 ADMIN_CHAT : '/admin/chat',
 ADMIN_ANALYTICS : '/admin/analytics',
 ADMIN_EDIT_USER : '/admin/edit-user'
}
