import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SingleNum = ({ item, msg }) => {
  const [isClick, setIsClick] = useState(false);

  const message = `🏡 Discover Your Dream Property with Hafiz Brothers! 🏡

  Hello! 👋
  
  Are you looking to buy, sell, or rent a property? Or perhaps you’re interested in flexible installment plans? At Hafiz Brothers, we offer a wide range of real estate services to meet all your needs!
  
  🔹 Buy – Find the perfect home or investment property.
  🔹 Sell – Get the best value for your property.
  🔹 Rent – Discover great rental options.
  🔹 Installments – Enjoy flexible payment plans for your convenience.
  
  With years of experience and a dedicated team, we’re here to help you every step of the way.
  
  Visit our website for more information: www.hafizbrothesrestate.com
  
  Contact us now to schedule a consultation or for any inquiries!
    
  Looking forward to assisting you!
  
  Best regards,
  Hafiz Brothers`;

  return (
    <Link
      onClick={() => setIsClick(true)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: " 1rem",
      }}
      target="_blank"
      to={`https://wa.me/${item}?text=${encodeURIComponent(msg)}`} // Correctly formats the WhatsApp URL
    >
      {item}
      <input name="check" checked={isClick} type="checkbox" />
    </Link>
  );
};

export default SingleNum;
