import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const StripeOption1 = ({ priceId, buttonText }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
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
      {buttonText}
    </button>
  );
};

export default StripeOption1;
