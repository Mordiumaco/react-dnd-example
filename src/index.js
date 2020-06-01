import React from "react";
import ReactDOM from "react-dom";
import DragAndDropBox from "./DragAndDropBox";
import * as serviceWorker from "./serviceWorker";

const boxStyle = {
  width: 400,
};

const cardStyle = {
  border: "1px solid gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

const cards = [
  {
    id: 1,
    text: "Write a cool JS library",
  },
  {
    id: 2,
    text: "Make it generic enough",
  },
  {
    id: 3,
    text: "Write README",
  },
  {
    id: 4,
    text: "Create some examples",
  },
  {
    id: 5,
    text:
      "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
  },
  {
    id: 6,
    text: "???",
  },
  {
    id: 7,
    text: "PROFIT",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <DragAndDropBox boxStyle={boxStyle} cardStyle={cardStyle} cards={cards} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
