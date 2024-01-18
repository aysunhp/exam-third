import UserRoot from "../pages/userRoot";
import Home from "../pages/home/index";
import Add from "../pages/add/index";
import Basket from "../pages/basket/index";
import Wishlist from "../pages/wishlist/index";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import Specialist from "../pages/Specialist";
import Detail from "../pages/detail";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/specialist",
        element: <Specialist />,
      },
    ],
  },
];

export default routes;
