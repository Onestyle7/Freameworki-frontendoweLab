import React, { useContext } from "react";
import AppContext from "../data/AppContext";
import FlexContainer from "../components/FlexContainer";
import Item from "../components/Item";

export default function Lab3() {
  const { items } = useContext(AppContext);

  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} />
    </div>
  );
}
