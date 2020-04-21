import React, { useState } from "react";
import clsx from "clsx";

import { PokerStyles } from "./styles/Poker.styles";

const Poker = () => {
  const classes = PokerStyles();
  const fibonacci = ["1", "2", "3", "5", "8", "?", "☕"];
  const [cardSelected, setCardSelected] = useState(-1);

  const onClickCard = (key: number) => {
    setCardSelected(key);
  };

  return (
    <div className={classes.cards}>
      {fibonacci.map((fibonacciItem: string, key: number) => (
        <div
          className={clsx(classes.card, { selected: cardSelected === key })}
          key={`cardId_${key}`}
          onClick={() => onClickCard(key)}
        >
          {fibonacciItem}
        </div>
      ))}
    </div>
  );
};

export default Poker;
