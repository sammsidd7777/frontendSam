
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import ProductInfo from "./components/ProductInfo";
import Shopnow from "./components/Shopnow";
import FindCollection from "./components/FindCollection";


const App = () => {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      {path:"/findCollection", element: <Shopnow />},
      {path:"/productDetail/:id",element: <ProductInfo  />},
      {path:"/findCollection/:id",element: <FindCollection  />}
    
    
 
   
  

    ],
  );

  return <RouterProvider router={router} />;
};

export default App;