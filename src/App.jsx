import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


import ProductDetails from "./ProductDetails";


import RootLayout from "./RootLayout/RootLayout";
import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route>

    <Route index element={<Home />}/>
    <Route path="/ProductDetails" element={<ProductDetails/>}/>
    </Route>

     
      
  )
);       


const App = () => {
//   

 
  return (
    <>
    <RouterProvider router={router} />
    </>
      
  )
}

export default App
