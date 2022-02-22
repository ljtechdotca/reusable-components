import React from "react";
import { Footer, Header } from "..";
import styles from "./Layout.module.scss";

interface LayoutProps {}

export const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => {
  return (
    <div className={styles.root}>
      <Header links={[{ id: "foo", name: "Foo", href: "/foo" }]}>
        ljtech reusable-components
      </Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
