import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  background?: string;
  color?: string;
  border?: string;
  fontSize?: number;
}

export const Button = ({
  children,
  fontSize = 1,
  background = "transparent",
  color = "currentColor",
  border = "transparent",
  ...attributes
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={styles.root}
      style={{
        background,
        color,
        borderColor: border,
        fontSize: `${fontSize}rem`,
      }}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
