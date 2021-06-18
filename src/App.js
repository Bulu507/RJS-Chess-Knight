import "./styles.css";
import { Board } from "./component";
import React, { useState } from "react";

export default function App() {
  const [playerPos, setPlayerPos] = useState([1, 2]);

  return (
    <Board
      playerPosition={playerPos}
      setPlayerPos={(pos) => setPlayerPos(pos)}
    />
  );
}
