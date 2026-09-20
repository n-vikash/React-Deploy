import Header from "./components/Header";
import NotFound from "./components/NotFound";
import StudyMaterials from "./components/Materials";
import Novels from "./components/Novels";
import PreviousPapars from "./components/Papars";
import ProtectRoutes from "./components/ProtectRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StdentDetails from "./components/StudentDetails";
import { lazy, Suspense } from "react";
import Loading from "./components/Suspense";
import UserProvider from "./components/userContext";
const Home = lazy(() => import("./pages/Home"));
const Books = lazy(() => import("./pages/Books"));
const About = lazy(() => import("./pages/About"));
const Profiles = lazy(() => import("./pages/Profiles"));
const Details = lazy(() => import("./pages/Details"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

import "./App.css";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <div>
              <Header />
              <Home />
            </div>
          </Suspense>
        ),
      },
      {
        path: "/Profiles",
        element: (
          <div>
            <Header />
            <ProtectRoutes>
              <Profiles />
            </ProtectRoutes>
          </div>
        ),
      },
      {
        path: "/Details",
        element: (
          <div>
            <Header />
            <ProtectRoutes>
              <Details />
            </ProtectRoutes>
          </div>
        ),
      },
      {
        path: "/About",
        element: (
          <div>
            <Header />
            <About />
          </div>
        ),
      },
      {
        path: "/Books",
        element: (
          <div>
            <Header />
            <ProtectRoutes>
              <Books />
            </ProtectRoutes>
          </div>
        ),
        children: [
          {
            path: "materials",
            element: <StudyMaterials />,
          },
          {
            path: "novels",
            element: <Novels />,
          },
          {
            path: "papars",
            element: <PreviousPapars />,
          },
        ],
      },
      {
        path: "/Profiles/:id",
        element: (
          <div>
            <Header />
            <StdentDetails />
          </div>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loading />}>
            <div>
              <Login />
            </div>
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loading />}>
            <div>
              <Signup />
            </div>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    {
      basename: "/React-Deploy",
    },
  );
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};
export default App;
