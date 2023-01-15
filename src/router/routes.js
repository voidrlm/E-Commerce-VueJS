const routes = [
  {
    path: "/",
    name: "Login",
    meta: { authorized: false },
    component: () => import("../views/userAuthentication.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { authorized: true },
    component: () => import("../views/dashboard.vue"),
  },
  {
    path: "/product/:id",
    name: "View Product",
    meta: { authorized: true },
    component: () => import("../views/product.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    meta: { authorized: true },
    component: () => import("../views/cart.vue"),
  },
  {
    path: "/search/:id",
    name: "Search",
    meta: { authorized: true },
    component: () => import("../views/search.vue"),
  },
];
export default routes;
