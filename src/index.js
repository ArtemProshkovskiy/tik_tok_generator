import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/main_page";

import './index.css';
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
]);

ReactDOM.createRoot(document.querySelector(".app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);