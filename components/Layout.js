import styles from "@/styles/Layout.module.css";
import Nav from "@/components/Nav";
import Meta from "@/components/Meta";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
