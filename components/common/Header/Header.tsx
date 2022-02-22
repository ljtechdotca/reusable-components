import { Tab } from "@components/ui";
import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  links: { id: string; href: string; name: string }[];
}

export const Header = ({
  children,
  links,
}: React.PropsWithChildren<HeaderProps>) => {
  return (
    <header className={styles.root}>
      <Tab href="/">{children}</Tab>
      <nav className={styles.container}>
        {links.map(({ id, href, name }) => (
          <Tab key={id} href={href}>
            {name}
          </Tab>
        ))}
      </nav>
    </header>
  );
};

export default Header;
