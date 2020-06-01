import React, { useContext } from "react";
import { Card } from "./Card";
import { DragAndDropContext } from "./index";

const Container = () => {
  const useDragAndDropContext = useContext(DragAndDropContext);

  const renderCard = (card, index) => {
    return (
      <Card
        style={useDragAndDropContext.cardStyle}
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={useDragAndDropContext.moveCard}
      />
    );
  };

  return (
    <>
      <div style={useDragAndDropContext.boxStyle}>
        {useDragAndDropContext.cards.map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};

export default Container;
