import { Knight, Square } from "../component";

export default function Board({ playerPosition, setPlayerPos }) {
  const setSquare = (i, [posX, posY]) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isCurPos = x === posX && y === posY;
    const cekPoint = isCurPos ? <Knight /> : null;
    const size = 100 / 8;

    return (
      <div
        key={i}
        onClick={() => handleClick(x, y)}
        style={{ width: `${size}%`, height: `${size}%` }}
      >
        <Square black={black}>{cekPoint}</Square>
      </div>
    );
  };

  const handleClick = (x, y) => {
    // console.log(x, y);
    if (canMoveKnight(x, y)) {
      setPlayerPos([x, y]);
    }
  };

  const canMoveKnight = (toX, toY) => {
    const [x, y] = playerPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(setSquare(i, playerPosition));
  }

  return (
    <>
      <div className="w-full h-full flex flex-wrap">{squares}</div>
    </>
  );
}
