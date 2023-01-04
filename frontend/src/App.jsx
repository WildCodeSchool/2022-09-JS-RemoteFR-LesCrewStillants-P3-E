import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "@components/navbar/Navbar";
import LeftBar from "@components/leftBar/LeftBar";
import RightBar from "@components/rightBar/Rightbar";
import Home from "@pages/home/Home";
import Profile from "@pages/profile/Profile";

function App() {
  function Layout() {
    return (
      <span>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </span>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <Home />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
