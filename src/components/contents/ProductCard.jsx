import { addProduct } from "../../atom/shoppingCart";

function ProductCard() {
  // Sample product list will remove this once add product is ok
  const products = [
    {
      productID: 1,
      productImage:
        "https://m.media-amazon.com/images/I/81DaQhY+yRL._AC_UF1000,1000_QL80_.jpg",
      productName: "Product Name1",
      productPrice: 400,
    },
    {
      productID: 2,
      productImage:
        "https://m.media-amazon.com/images/I/71nDcviv-tL._AC_SL1001_.jpg",
      productName: "Product Name2",
      productPrice: 500,
    },
    {
      productID: 3,
      productImage:
        "https://i.ebayimg.com/images/g/RU0AAOSwR5VlgqAu/s-l1200.webp",
      productName: "Product Name3",
      productPrice: 320,
    },
    {
      productID: 4,
      productImage:
        "https://i.ebayimg.com/images/g/4bYAAOSwbAVk4w4S/s-l1200.jpg",
      productName: "Product Name4",
      productPrice: 250,
    },
    {
      productID: 5,
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsFiptv9JQ02kwgwEmLbqAQrVfR_b8Rl7LA&s",
      productName: "Product Name5",
      productPrice: 300,
    },
    {
      productID: 6,
      productImage:
        "https://m.media-amazon.com/images/I/710FSXg104L._AC_UF1000,1000_QL80_.jpg",
      productName: "Product Name6",
      productPrice: 350,
    },
  ];

  return (
    <div className="flex space-x-4">
      {products.slice(0, 5).map((product) => (
        <div
          key={product.productID}
          className="max-w-xs w-48 rounded overflow-hidden shadow-lg p-2 flex-none transform transition duration-300 hover:scale-105"
        >
          {/* Replace src with actual product image URL */}
          <img
            className="w-full h-32 object-cover"
            src={product.productImage}
            alt="Product Image"
          />
          <div className="px-4 py-2">
            <h2 className="font-bold text-sm mb-1">{product.productName}</h2>
            <p className="text-gray-700 text-xs">{product.productPrice}</p>
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
