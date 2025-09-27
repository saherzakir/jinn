import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Mastercard from "../assets/mastercard.png";
import Footer from "../components/footer";
import Regalleather from "../assets/regalleather.jpg"

const Checkout = () => {
  return (
    <div>
      <Topbar />
      <Header />

      {/* Main container with flex */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start max-w-6xl mx-auto mt-10 px-4 sm:px-8 gap-10">
        
        {/* ---------------- LEFT SIDE (your code unchanged) ---------------- */}
        <div className="max-w-2xl space-y-8 ">
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <input
              type="text"
              placeholder="Email Or Phone Number"
              className="w-full border border-gray-300 rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newsletter" className="w-4 h-4" />
              <label htmlFor="newsletter" className="text-sm">
                Email Me With News And Offers
              </label>
            </div>
          </div>

          {/* Delivery Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Delivery</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Country / Region"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex items-center space-x-2 mt-3">
              <input type="checkbox" id="saveInfo" className="w-4 h-4" />
              <label htmlFor="saveInfo" className="text-sm">
                Save This Information For Next Time
              </label>
            </div>
          </div>

          {/* Payment Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Payment</h2>
            <p className="text-sm text-gray-600 mb-2">
              All the transactions are secure and encrypted
            </p>

            <div className="space-y-3">
              <label className="flex items-center border rounded-md p-3 cursor-pointer hover:border-pink-500">
                <input type="radio" name="payment" className="mr-2" />
                Cash On Delivery (COD)
              </label>

              <label className="flex items-center justify-between border rounded-md p-3 cursor-pointer bg-pink-100 border-pink-300">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2"
                    defaultChecked
                  />
                  PAYFAST (Pay Via Debit/Credit/Wallet/Bank Account)
                </div>
                <div className="flex space-x-1">
                
                  <img src={Mastercard} alt="Mastercard" className="h-5" />
                </div>
              </label>
            </div>
          </div>

          {/* Shipping Method Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Shipping Method</h2>
            <label className="flex items-center justify-between border border-pink-300 bg-pink-100 p-3 rounded-md cursor-pointer">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="shipping"
                  className="accent-pink-500"
                  defaultChecked
                />
                <span>Free</span>
              </div>
              <span className="font-semibold">Free</span>
            </label>
          </div>

          {/* Billing Address Section */}
          <div className="space-y-2 mb-2">
            <h2 className="text-lg font-bold">Billing Address</h2>
            <label className="flex items-center justify-between border border-pink-300 bg-pink-100 p-3 rounded-md cursor-pointer">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="billing"
                  className="accent-pink-500"
                  defaultChecked
                />
                <span>Same As Shipping Address</span>
              </div>
              <span className="font-semibold">Free</span>
            </label>
          </div>

          {/* Pay Now Button */}
          <div className="mt-2 ">
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md">
              Pay Now
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-sm text-black mb-10 mt-3">
            <a href="#" className="hover:underline">
              Refund Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Condition
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

  {/* ---------------- RIGHT SIDE (Order Summary Card) ---------------- */}
{/* ---------------- RIGHT SIDE (Order Summary Card) ---------------- */}
<div className="w-full max-w-lg mx-auto bg-gray-100 border border-gray-300 shadow-lg rounded-xl p-6 sm:p-8 mt-4 mb-10 sm:mt-8 sm:mb-12 lg:mt-16 lg:mb-16">

  <h2 className="text-lg font-bold mb-4">Order Summary</h2>

  {/* ✅ Mobile Table View */}
  <table className="w-full border-collapse mb-6 sm:hidden">
    <thead>
      <tr className="bg-gray-200 text-left text-sm">
        <th className="p-2">Image</th>
        <th className="p-2">Product</th>
        <th className="p-2">Size</th>
        <th className="p-2 text-right">Price</th>
      </tr>
    </thead>
    <tbody>
      {[
        { id: 1, name: "Regal Leather Starlet", size: "39", price: 5499, image: Regalleather },
        { id: 2, name: "Regal Classic Loafers", size: "42", price: 6999, image: Regalleather },
        { id: 3, name: "Regal Modern Sneakers", size: "40", price: 4499, image: Regalleather },
      ].map((product) => (
        <tr key={product.id} className="border-b last:border-0">
          <td className="p-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 rounded-md object-contain bg-white"
            />
          </td>
          <td className="p-2">{product.name}</td>
          <td className="p-2">{product.size}</td>
          <td className="p-2 text-right font-semibold">
            Rs {product.price.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* ✅ Desktop / Tablet Flex View */}
  <div className="hidden sm:block">
    {[
      { id: 1, name: "Regal Leather Starlet", size: "39", price: 5499, image: Regalleather },
      { id: 2, name: "Regal Classic Loafers", size: "42", price: 6999, image: Regalleather },
      { id: 3, name: "Regal Modern Sneakers", size: "40", price: 4499, image: Regalleather },
    ].map((product) => (
      <div
        key={product.id}
        className="flex items-center justify-between mb-6 border-b pb-4 last:border-b-0"
      >
        <div className="flex items-center space-x-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 rounded-md object-contain bg-white"
          />
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">Size {product.size}</p>
          </div>
        </div>
        <span className="font-semibold text-lg">Rs {product.price.toLocaleString()}</span>
      </div>
    ))}
  </div>

  {/* Discount Code */}
  <div className="flex flex-col sm:flex-row mb-6">
    <input
      type="text"
      placeholder="Discount Code"
      className="flex-grow border border-gray-300 bg-gray-200 rounded-md sm:rounded-l-md sm:rounded-r-none p-3 focus:outline-none mb-3 sm:mb-0"
    />
    <button className="bg-gray-300 text-black px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium">
      Apply
    </button>
  </div>

  {/* Price Details */}
  <div className="space-y-3 text-base sm:text-lg">
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>
        Rs {([5499, 6999, 4499].reduce((a, b) => a + b, 0)).toLocaleString()}
      </span>
    </div>
    <div className="flex justify-between">
      <span>Shipping</span>
      <span>Free</span>
    </div>
    <div className="flex justify-between text-lg sm:text-xl pt-3">
      <span>Total</span>
      <span>
        Rs {([5499, 6999, 4499].reduce((a, b) => a + b, 0)).toLocaleString()}
      </span>
    </div>
  </div>
</div>

      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
