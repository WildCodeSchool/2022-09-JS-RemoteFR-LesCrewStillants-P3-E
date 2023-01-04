import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "@pages/home/Home";
import Profile from "@pages/profile/Profile";
import Layout from "@services/Layout";

function App() {
  // Protected lecture of homepage

  const currentUser = true;

  // eslint-disable-next-line react/no-unstable-nested-components,react/prop-types
  function ProtectedRoute({ children }) {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  // Create route and disposition for homepage and profile page

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
