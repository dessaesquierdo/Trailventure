import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function AdminDashboard() {
  const { user, fetching } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!fetching && user?.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [user, fetching, navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}

export default AdminDashboard;
