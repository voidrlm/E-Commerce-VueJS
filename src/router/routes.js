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
    path: "/calendar",
    name: "Calendar",
    meta: { authorized: true },
    component: () => import("../views/calendar.vue"),
  },
];
export default routes;
