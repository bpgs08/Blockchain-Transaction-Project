const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: "index",
    pattern: "/",
  },
];

APP_ROUTES.forEach((route) => routes.add(route));
