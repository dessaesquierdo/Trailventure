import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// Users cant acces this page and cant add product
function AdminAddProduct() {
  const { user, fetching } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!fetching && user?.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [user, fetching, navigate]);

  return (
    <div>
      <h1>Admin Add Product</h1>
    </div>
  );
}

export default AdminAddProduct;
