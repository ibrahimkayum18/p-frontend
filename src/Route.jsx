import {
  createBrowserRouter
} from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Admin from "./layout/Admin";
import AdminProjects from "./pages/AdminProjects";
import AdminBlogs from "./pages/AdminBlogs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true, // 👈 default route for /admin
        element: <AdminProjects />
      },
      {
        path: 'blogs', // 👈 no leading slash
        element: <AdminBlogs />
      }
    ]
  }
]);

export default Router;