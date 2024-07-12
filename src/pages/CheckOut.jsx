import { useAtom } from "jotai";
import { shoppingCartAtom } from "../atom/shoppingCart";

const CheckOut = () => {
  const [shoppingCart] = useAtom(shoppingCartAtom);

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-2 py-4">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 overflow-x-auto">
            <h1 className="mb-5 text-3xl font-bold">Checkout</h1>

            <table className="table-auto border-separate w-full rounded-md shadow-md bg-white border-spacing-10">
              <thead>
                <tr>
                  <th className="text-left">Product</th>
                  <th className="text-left">Name</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Total</th>
                </tr>
              </thead>

              <tbody>
                {shoppingCart.map((item) => (
                  <tr key={item.productID}>
                    <td>
                      <img
                        className="w-16 h-16 object-cover"
                        src={item.image}
                        alt="Product Image"
                      />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.quantity}</td>

                    <td>${item.price}</td>

                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="m-3 flex justify-end">
              <p className="text-lg font-bold">
                Total: $
                {shoppingCart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>

          <div className="w-96">
            <h2 className="mb-5 text-2xl font-bold">Payment info.</h2>

            <div className="p-5 bg-white rounded-md shadow-md">
              <h3 className="mb-4 text-xl font-bold">Payment Method</h3>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  Credit Card
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  GCash
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  Cash on Delivery
                </label>
              </div>

              <hr className="my-5" />

              <label>
                Name on Card:
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Card Number"
                />
              </label>

              <label className="block mt-3">
                Card Number:
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Card Number"
                />
              </label>

              <div className="mt-3 flex gap-2">
                <label>
                  Expiry Date:
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border rounded-md"
                    placeholder="MM/YY"
                  />
                </label>

                <label>
                  CVV:
                  <input
                    type="text"
                    className="mt-1 w-full p-2 border rounded-md"
                    placeholder="CVV"
                  />
                </label>
              </div>

              <button className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
