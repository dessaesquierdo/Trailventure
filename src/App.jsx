import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <div
          className="text-white flex justify-center items-center bg-cover h-[100vh]"
          style={{ background: "url('../src/assets/adventurebg.png')" }}
        >
          <Login />
        </div>
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
]);

// Define the main App component
function App() {
  return <RouterProvider router={router} />;
}

// Export the App component as default
export default App;
