import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
const dummyData = [
  { todoName: "Dye your hair a fall color", id: "1" },
  { todoName: "Drink Pumpkin Spice Latte", id: "2" },
  {
    todoName: "Buy fall candels",
    id: "3",
  },
  { todoName: "Leaf peaking in Upstate", id: "4" },
  { todoName: "Instagram dead leaves on the ground", id: "5" },
  { todoName: "Learn React.js", id: "6" },
];
const Main = () => {
  const [todos, setToDos] = useState(dummyData);
  return <App todos={todos} />;
};

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
