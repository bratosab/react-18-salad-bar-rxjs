import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../pages/Login";
import { Salad } from "../pages/Salad";
import { Pokemon } from "../pages/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "salad/:id",
        element: <Salad />,
      },
      {
        path: "pokemon",
        element: <Pokemon />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 - Page not found</h1>,
  },
]);
