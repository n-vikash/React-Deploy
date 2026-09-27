import Header from "./components/Header";
import NotFound from "./components/NotFound";
import StudyMaterials from "./components/Materials";
import Novels from "./components/Novels";
import PreviousPapars from "./components/Papars";
import ProtectRoutes from "./components/ProtectRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingItmes from "./components/ShoppingItems";
import { lazy, Suspense } from "react";
import Loading from "./components/Suspense";
const Home = lazy(() => import("./pages/Home"));
const Books = lazy(() => import("./pages/Books"));
const About = lazy(() => import("./pages/About"));
const Shopping = lazy(() => import("./pages/Shopping"));
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
        path: "/Shopping",
        element: (
          <div>
            <Header />
            <ProtectRoutes>
              <Shopping />
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
        path: "/Shopping/:id",
        element: (
          <div>
            <Header />
            <ShoppingItmes />
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
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
