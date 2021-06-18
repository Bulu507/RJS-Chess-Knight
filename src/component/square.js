import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Square({ black, pos, style, children }) {
  const color = black ? "black" : "white";
  const font = black ? "white" : "black";
  const dispatch = useDispatch();
  const stateGlobal = useSelector((state) => state);
  const playerPos = stateGlobal.playerPos;
  const [overlay, setOverlay] = useState(false);
  const [clickX, clickY] = pos;

  const canMoveKnight = (toX, toY) => {
    const [currentX, currentY] = playerPos;
    const dx = toX - currentX;
    const dy = toY - currentY;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  const handleClick = (pos) => {
    if (canMoveKnight(clickX, clickY)) {
      dispatch({ type: "SET_PLAYER_POS", value: pos });
    }
  };

  useEffect(() => {
    if (canMoveKnight(pos[0], pos[1])) {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerPos, pos]);

  return (
    <>
      <div style={style} onClick={() => handleClick(pos)}>
        <div className={styles.box(color, font)}>{children}</div>
        {overlay && (
          <div className="bg-yellow-500 absolute inset-0 opacity-75"></div>
        )}
      </div>
    </>
  );
}

const styles = {
  box: (color, font) => `bg-${color} text-${font} w-full h-14`
};
