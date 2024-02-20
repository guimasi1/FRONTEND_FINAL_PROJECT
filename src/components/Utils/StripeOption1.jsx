import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const StripeOption1 = () => {
  const handleClick = async () => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    console.log("ciao");
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1OlZiWHxfOF7FT2OHCZ6mH3Q", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "http://localhost:3000/successful-payment",
      cancelUrl: "http://localhost:3000/denied-payment",
    });
    if (error) {
      console.error("Something went wrong at the checkout:", error.message);
    }
  };
  return (
    <button
      className="brownish-button px-4 py-2 rounded fw-bold text-white"
      onClick={() => {
        handleClick();
      }}
    >
      Checkout
    </button>
  );
};

export default StripeOption1;
