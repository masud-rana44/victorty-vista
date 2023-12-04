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
        element: <ContestDetails />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/contests/registration/:contestId",
        element: <ContestRegistration />,
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
        element: <AddContest />,
      },
      {
        path: "created-contests",
        element: <MyCreatedContest />,
      },
      {
        path: "contests-submission/:id",
        element: <ContestSubmission />,
      },
      {
        path: "contests/update/:id",
        element: <UpdateContest />,
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
