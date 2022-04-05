import { Button } from "@mui/material";
import React, { useState } from "react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const __DEV__ = document.domain === "localhost";
const PaymentPage = () => {
  const [name, setName] = useState("Pratik");
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:4000/payment/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_KhYTiBkXohzomU" : "PRODUCTION_KEY",
      amount: data.amount.toString(), //rs 50
      currency: data.currency,
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      name: "Your Trip",
      description: "Bus Fare",
      image:
        "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: name,
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      PaymentPage
      <Button onClick={displayRazorpay}>Pay</Button>
    </>
  );
};

export default PaymentPage;
