import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
//import PersistLogin from "../components/HOC/PersistLogin";
//import NotProtectdRoute from "../components/HOC/withNotProtect"
//import ProtectdRoute from "../components/HOC/withProtect"

const router = createBrowserRouter([
  {
    // element: <PersistLogin />,
    //children: [
    //{
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (<Home />),
      },
      {
        path: '/aboutUs',
        element: (<AboutUs />)
      },
      {
        path:"/contactUs",
        element:(<Contact/>)
      }
    ],
  },
  /*{
    path: "/admin",
    element: (
      <ProtectdRoute path="/admin" element={<Admin />} />
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "addEvent",
        element: <AddEvent />,
      },
      {
        path: "allEvents",
        element: <AllEvents />,
      },
      {
        path: "allEvents/editEvent",
        element: (<EditEvent />),
      },
      {
        path: "addUser",
        element: <AddUser />,
      },

    ],
  },*/

  // {
  //   path: "logIn",
  //   element: <NotProtectdRoute element={<LogIn />} />,
  //   children: [
  //     {
  //       index: true,
  //       element: <LoginForm />,
  //     },
  //     {
  //       path: "forgot-password",
  //       element: <ForgotPasswordForm />,
  //     },
  //     {
  //       path: "reset-password",
  //       element: <ResetPasswordForm />,
  //     }
  //   ]
  // },
  //{
  //  path: "signUp",
  //  element: (<NotProtectdRoute path="signUp" element={<SignUp />} />),
  //},
  //],
  //},
  /*
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/server-error",
      element: <ServerError />,
    },
    */
],
  {
    basename: "/Twwir/",
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
