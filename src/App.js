import "./styles.css";
import { useState, useEffect } from "react";
import Users from "./Users";
import higherOrderComponent from "./higherOrderComponent";
export default function App() {
  const UpdatedComp = higherOrderComponent(Users);

  return (
    <div className="App">
      <UpdatedComp />
    </div>
  );
}
