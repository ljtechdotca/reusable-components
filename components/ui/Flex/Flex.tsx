import React from "react";
import styles from "./Flex.module.scss";

interface FlexProps {
  wrap?: React.CSSProperties["flexWrap"];
  direction?: React.CSSProperties["flexDirection"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  gap?: number;
  width?: string;
}

export const Flex = ({
  align = "center",
  children,
  direction = "row",
  gap = 0,
  justify = "center",
  width = "unset",
  wrap = "nowrap",
}: React.PropsWithChildren<FlexProps>) => {
  return (
    <div
      className={styles.root}
      style={{
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: `${gap}rem`,
        flexWrap: wrap,
        maxWidth: width,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
