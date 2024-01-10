import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
import Aboutus from "./Pages/Aboutus/Aboutus"
import { Children } from "react"
import IntroductionProduct from "./Pages/IntroductionProduct/IntroductionProduct"
import CallPage from "./Pages/CallPage/CallPage"
import Basket from "./Pages/Basket/Basket"
import Error404 from "./Pages/Error404/Error404"

let routes = [
    { path: '/', element: <Home /> },
    { path: '/aboutus', element: <Aboutus /> },
    { path: '/products/:cat', element: < Products /> },
    { path: '/introductionProduct/:code', element: <IntroductionProduct /> },
    { path: '/callpage', element: <CallPage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Error404 /> },
]






export default routes