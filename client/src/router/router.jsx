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
import AddContest from "../pages/creator/AddContest";
import MyRegisteredContest from "../pages/users/MyRegisteredContest";
import MyWinningContest from "../pages/users/MyWinningContest";
import MyCreatedContest from "../pages/creator/MyCreatedContest";
import Contests from "../pages/Contests";
import UpdateContest from "../pages/creator/UpdateContest";
import ContestDetails from "../pages/ContestDetails";
import ContestRegistration from "../pages/ContestRegistration";
import TaskSubmission from "../pages/users/TaskSubmission";
import ContestSubmission from "../pages/creator/ContestSubmission";
import LeaderBoard from "../pages/LeaderBoard";
import PrivateRoute from "./PrivateRoute";
import CreatorRoute from "./CreatorRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contests",
        element: <Contests />,
      },
      {
        path: "/contests/:id",
        element: (
          <PrivateRoute>
            <ContestDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/contests/registration/:contestId",
        element: (
          <PrivateRoute>
            <ContestRegistration />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "all-contests",
        element: (
          <AdminRoute>
            <AllContests />
          </AdminRoute>
        ),
      },
      {
        path: "registered-contests",
        element: <MyRegisteredContest />,
      },
      {
        path: "task-submission/:contestId",
        element: <TaskSubmission />,
      },
      {
        path: "winning-contests",
        element: <MyWinningContest />,
      },

      // route for creator
      {
        path: "add-contest",
        element: (
          <CreatorRoute>
            <AddContest />
          </CreatorRoute>
        ),
      },
      {
        path: "created-contests",
        element: (
          <CreatorRoute>
            <MyCreatedContest />
          </CreatorRoute>
        ),
      },
      {
        path: "contests-submission/:id",
        element: (
          <CreatorRoute>
            <ContestSubmission />
          </CreatorRoute>
        ),
      },
      {
        path: "contests/update/:id",
        element: <UpdateContest />,
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
