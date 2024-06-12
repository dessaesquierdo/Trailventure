import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

// Import Unauthorized pages
import Unauthorized from "./pages/Unauthorized";

// Import Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAddProduct from "./pages/Admin/AdminAddProduct";

// Define routes
const router = createBrowserRouter([
  // Path for the Home/main page
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

  // Path for the Cart page
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },

  // Path for Checkout page
  {
    path: "/checkout",
    element: (
      <Layout>
        <CheckOut />
      </Layout>
    ),
  },

  // Path for the Unauthorized page
  {
    path: "/unauthorized",
    element: (
      <Layout>
        <Unauthorized />
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

  // ===============| Admin Routes |================
  // Path for Admin dashboard, use protected routes
  {
    path: "/admin/dashboard",
    element: (
      <Layout>
        <AdminDashboard />
      </Layout>
    ),
  },

  // Path for Admin add product
  {
    path: "/admin/addproduct",
    element: (
      <Layout>
        <AdminAddProduct />
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
