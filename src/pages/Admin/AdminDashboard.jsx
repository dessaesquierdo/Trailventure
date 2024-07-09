import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function AdminDashboard() {
  const { user, fetching } = useAuth();
  const navigate = useNavigate();

  // Check if the user is an admin
  useEffect(() => {
    if (!fetching && user?.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [user, fetching, navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => navigate("/admin/addproduct")}>Add Product</button>
    </div>
  );
}

export default AdminDashboard;
