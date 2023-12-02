import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import PublicRoute from "./PublicRoute";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import HomePage from "../pages/home/HomePage";
import { DashboardLayout } from "../layout/DashboardLayout";
import AllUsers from "../pages/admin/AllUsers";
import AllContests from "../pages/admin/AllContests";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-contests",
        element: <AllContests />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <RegistrationPage />
      </PublicRoute>
    ),
  },
]);

export default router;
