import React from "react";

export default function RatingBar({ rate }) {
  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <span key={index} style={{ color: index < rate ? "gold" : "gray" }}>
          ★
        </span>
      ))}
    </div>
  );
}
