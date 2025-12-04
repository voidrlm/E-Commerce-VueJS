const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/dashboard.vue"),
  },
  {
    path: "/product/:id",
    name: "View Product",
    component: () => import("../views/product.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart.vue"),
  },
  {
    path: "/search/:id",
    name: "Search",
    component: () => import("../views/search.vue"),
  },
];
export default routes;
