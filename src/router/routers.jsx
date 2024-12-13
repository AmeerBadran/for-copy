import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: (<Home />),
//       },
//       {
//         path: '/aboutUs',
//         element: (<AboutUs />)
//       },
//       {
//         path:"/contactUs",
//         element:(<Contact/>)
//       }
//     ],
//   },
// ],
//   {
//     basename: "/Twwir/",
//   }
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
