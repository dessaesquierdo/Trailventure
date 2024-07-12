// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import useAuth from "../../hooks/useAuth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Users can't access this page and can't add product
function AdminAddProduct() {
  const { user, fetching } = useAuth();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  // const [productStock, setProductStock] = useState('');

  // Redirect user if not admin
  useEffect(() => {
    if (!fetching && user?.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [user, fetching, navigate]);

  // Add products
  const addProduct = async (event) => {
    event.preventDefault();
    try {
      const db = getFirestore();
      const imageUrl = await handleImageUpload(productImage);

      await addDoc(collection(db, "products"), {
        name: productName,
        image: imageUrl,
        description: productDescription,
        price: parseFloat(productPrice),
        // stock: parseInt(productStock, 10),
      });

      alert("Product added successfully!");
      setProductName("");
      setProductImage("");
      setProductDescription("");
      setProductPrice("");
      // setProductStock('');
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Error adding product");
    }
  };

  // Handle image upload
  const handleImageUpload = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `products/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Product</h1>
      <form style={styles.form} onSubmit={addProduct}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Product Image</label>
          <input
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Product Description</label>
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Product Price</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* <div style={styles.formGroup}>
          <label style={styles.label}>Product Stock</label>
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            style={styles.input}
          />
        </div> */}

        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    style: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default AdminAddProduct;
