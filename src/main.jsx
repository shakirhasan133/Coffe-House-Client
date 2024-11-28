import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import OurProdutcs from "./Components/OurProducts.jsx";
import Coffees from "./Components/Coffees.jsx";
import UpdateItems from "./Components/UpdateItems.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/edit-item/:id",
    element: <UpdateItems></UpdateItems>,
    loader: ({ params }) =>
      fetch(
        `https://coffeehousebackend-kzmnpso7.b4a.run/edit-item/${params.id}`
      ),
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails></ProductDetails>,
    loader: ({ params }) =>
      fetch(
        `https://coffeehousebackend-kzmnpso7.b4a.run/edit-item/${params.id}`
      ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
