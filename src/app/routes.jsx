import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import { SignupPage } from "../features/auth/pages/SignupPage";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { HomePage } from "../features/auth/pages/HomePage";

export const router = createBrowserRouter([
    {path: "/",element:<HomePage/>},
    {path: "/login",element:<LoginPage/>},
    {path: "/signup",element:<SignupPage/>},


]);


