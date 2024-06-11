import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";

// Define routes
const router = createBrowserRouter([
  // Path for the Home page
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },

  // Path for the Login page
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

  // Path for the Signup page
  {
    path: "/signup",
    element: (
      <Layout>
        <div
          className="text-white flex justify-center items-center bg-cover h-[100vh]"
          style={{ background: "url('../src/assets/hiking_bg.png')" }}
        >
          <Signup />
        </div>
      </Layout>
    ),
  },

  // Path for Search page
  // {
  //   path: "/search",
  //   element: (
  //     <Layout>
  //       <div style={{ background: "url('../src/assets/hiking_bg.png')" }}>
  //         <Search />
  //       </div>
  //     </Layout>
  //   ),
  // },
]);

// Define the main App component
function App() {
  return <RouterProvider router={router} />;
}

// Export the App component as default
export default App;
