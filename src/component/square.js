import React from "react";

export default function Square({ black, children }) {
  const color = black ? "black" : "white";
  const font = black ? "white" : "black";

  return (
    <div className="">
      <div className={styles.content(color, font)}>{children}</div>
    </div>
  );
}

const styles = {
  content: (color, font) => `bg-${color} text-${font} w-full h-10`
};
