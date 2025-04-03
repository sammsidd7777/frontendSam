
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Shopnow from "./Pages/Shopnow";
import ProductInfo from "./Pages/ProductInfo";
import FindCollection from "./Pages/FindCollection";
import MyAccount from "./Pages/MyAccount";







const App = () => {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      {path:"/findCollection", element: <Shopnow />},
      {path:"/productDetail/:id",element: <ProductInfo  />},
      {path:"/findCollection/:id",element: <FindCollection  />}
      ,{path:"/profile", element: <MyAccount />}
    
    
 
   
  

    ],
  );

  return <RouterProvider router={router} />;
};

export default App;