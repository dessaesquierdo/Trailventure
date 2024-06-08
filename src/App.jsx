// Import modules and components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import React from "react";

// Create a Layout component that includes the Header, Footer, and the children elements which are the pages displayed
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// Configure the router with the Layout component wrapping around the Home component
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
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
