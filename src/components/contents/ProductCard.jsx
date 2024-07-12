// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { addProduct } from "../../atom/shoppingCart";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productsItems = collection(db, "products");
      const productSnapshot = await getDocs(productsItems);
      const productList = productSnapshot.docs.map((doc) => ({
        productID: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  console.log(products);

  // console.log(products.name);

  return (
    <div className="flex space-x-4">
      {products.slice(0, 7).map((product) => (
        <div
          key={product.productID}
          className="max-w-xs w-48 rounded overflow-hidden shadow-lg p-2 flex-none transform transition duration-300 hover:scale-105"
        >
          <img
            className="w-full h-32 object-cover"
            src={product.image}
            alt="Product Image"
          />
          <div className="px-4 py-2">
            <h2 className="font-bold text-sm mb-1">{product.name}</h2>
            <p className="text-gray-700 text-xs">${product.price}</p>
          </div>
          <div className="px-4 pt-2 pb-2">
            <button
              onClick={() => addProduct(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
