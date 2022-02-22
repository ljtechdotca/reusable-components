import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return <footer className={styles.root}>©{new Date().getFullYear()}</footer>;
};

export default Footer;
