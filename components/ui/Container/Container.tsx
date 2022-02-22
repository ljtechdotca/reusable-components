import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {}

export const Container = ({
  children,
}: React.PropsWithChildren<ContainerProps>) => {
  return <div className={styles.root}>{children}</div>;
};

export default Container;
