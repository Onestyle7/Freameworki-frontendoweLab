import React from "react";
import FlexContainer from "../components/FlexContainer";
import Item from "../components/Item";

const data = [
  { name: "Ala", id: 1, rating: Math.floor(Math.random() * 11) },
  { name: "Ela", id: 2, rating: Math.floor(Math.random() * 11) },
  { name: "Karol", id: 3, rating: Math.floor(Math.random() * 11) },
  { name: "Ola", id: 4, rating: Math.floor(Math.random() * 11) },
  { name: "Monika", id: 5, rating: Math.floor(Math.random() * 11) },
  { name: "Robert", id: 6, rating: Math.floor(Math.random() * 11) },
];

export default function Lab3() {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={data} />
    </div>
  );
}
