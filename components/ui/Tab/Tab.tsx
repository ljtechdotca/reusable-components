import NextLink from "next/link";
import styles from "./Tab.module.scss";

interface TabProps {
  href: string;
}

export const Tab = ({ children, href }: React.PropsWithChildren<TabProps>) => {
  return (
    <NextLink href={href}>
      <a className={styles.root}>{children}</a>
    </NextLink>
  );
};

export default Tab;
