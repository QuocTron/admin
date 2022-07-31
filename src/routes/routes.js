import config from "../config";

import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.orders, component: Customer },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.profile, component: Register },
];

const privateRouters = [];

export { publicRouters, privateRouters };