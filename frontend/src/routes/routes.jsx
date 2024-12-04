import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import DashboardlLayout from "../layouts/DashboardlLayout";
import AdminHome from "../pages/dashboards/admin/AdminHome";
import AdminProfile from "../pages/dashboards/admin/AdminProfile";
import UserHome from "../pages/dashboards/user/UserHome";
import UserProfile from "../pages/dashboards/user/UserProfile";
import PrivateRoute from "./PrivateRoute";
import RedirectToDashboard from "../utils/RedirectToDashboard";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  //website
  {
    path: "/",
    element: <WebsiteLayout></WebsiteLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },

  //dashboard
  // if user access dashboard route then redirect to role based dashboard
  {
    path: "/dashboard",
    element: <RedirectToDashboard></RedirectToDashboard>,
  },
  //role based dashboard for user and admin
  {
    path: "/dashboard/*",
    element: <DashboardlLayout></DashboardlLayout>,
    children: [
      //admin routes
      {
        path: "admin",
        element: <PrivateRoute role={"admin"}></PrivateRoute>,
        children: [
          {
            path: "",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "profile",
            element: <AdminProfile></AdminProfile>,
          },
        ],
      },
      //user options
      {
        path: "user",
        element: <PrivateRoute role={"user"}></PrivateRoute>,
        children: [
          {
            path: "",
            element: <UserHome></UserHome>,
          },
          {
            path: "profile",
            element: <UserProfile></UserProfile>,
          },
        ],
      },
    ],
  },
]);

export default router;
