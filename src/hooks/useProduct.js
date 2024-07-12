import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// randomizing array elements for shuffling products by using Fisher-Yates algorithm
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// sorting products by latest
const sortByLatest = (products) => {
  return products.sort((a, b) => b.createdAt - a.createdAt);
};

// custom hook to fetch products from Firestore
const useProduct = (randomize = false, latest = false) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productsItems = collection(db, "products");
      const productSnapshot = await getDocs(productsItems);
      let productList = productSnapshot.docs.map((doc) => ({
        productID: doc.id,
        ...doc.data(),
      }));

      if (latest) {
        productList = sortByLatest(productList);
      } else if (randomize) {
        productList = shuffleArray(productList);
      }

      setProducts(productList);
    };

    fetchProducts();
  }, [randomize, latest]);

  return products;
};

export default useProduct;
