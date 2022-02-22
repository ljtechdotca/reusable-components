import React from "react";
import styles from "./Grid.module.scss";

interface GridProps {
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyItems"];
  gap?: number;
  columns?: number;
  rows?: number;
  width?: string;
}

export const Grid = ({
  align = "center",
  justify = "center",
  children,
  columns = 0,
  rows = 0,
  gap = 0,
  width = "unset",
}: React.PropsWithChildren<GridProps>) => {
  return (
    <div
      className={styles.root}
      style={{
        placeItems: `${align} ${justify}`,
        gridGap: `${gap}rem`,
        gridTemplateColumns: columns
          ? `repeat(${columns}, minmax(0, 1fr))`
          : "unset",
        gridTemplateRows: rows ? `repeat(${rows}, minmax(0, 1fr))` : "unset",
        maxWidth: width,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
