import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/App.jsx";
import Product from "./pages/product.jsx";
import ProductDetails from "./pages/productDetails.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product/>
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(<StrictMode>
  <RouterProvider router={router}/>
</StrictMode>);
