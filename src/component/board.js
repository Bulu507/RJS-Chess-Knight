import { Knight, Square } from "../component";
import { useSelector } from "react-redux";

export default function Board() {
  const stateGlobal = useSelector((state) => state);
  const playerPos = stateGlobal.playerPos;

  const setSquare = (i, [posX, posY]) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isCurPos = x === posX && y === posY;
    const cekPoint = isCurPos ? <Knight /> : null;
    const size = 100 / 8;
    const pos = [x, y];

    return (
      <Square
        key={i}
        black={black}
        style={{ position: "relative", width: `${size}%`, height: `${size}%` }}
        pos={pos}
      >
        {cekPoint}
      </Square>
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(setSquare(i, playerPos));
  }

  return (
    <>
      <div className="w-full h-full flex flex-wrap">{squares}</div>
    </>
  );
}
