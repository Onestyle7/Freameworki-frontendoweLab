import React, { useContext } from "react";
import AppContext from "../data/AppContext";
import Item from "../components/Item";

export default function Lab3() {
  const { items } = useContext(AppContext); // Pobieramy listę z kontekstu

  console.log("Aktualna lista items w Lab3:", items);

  return (
    <div>
      <h1>Laboratorium 3</h1>
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
