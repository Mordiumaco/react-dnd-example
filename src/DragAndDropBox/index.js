import React, { createContext, useState, useCallback } from "react";
import Container from "./Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const DragAndDropContext = createContext();

function DragAndDropBox(props) {
  const { boxStyle, cardStyle, cards: propsCards } = props;

  const [cards, setCards] = useState(propsCards);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = { ...cards[dragIndex] };

      const copyCards = [...cards];
      copyCards[dragIndex] = copyCards[hoverIndex];
      copyCards[hoverIndex] = dragCard;

      setCards(copyCards);
    },
    [cards]
  );

  return (
    <div className="DragAndDropBox">
      <DragAndDropContext.Provider
        value={{ boxStyle, cardStyle, cards, setCards, moveCard }}
      >
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      </DragAndDropContext.Provider>
    </div>
  );
}

export default DragAndDropBox;
