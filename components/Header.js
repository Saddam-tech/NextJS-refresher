import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> Newz
      </h1>
      <p className={styles.description}>
        Keep up to date with the latest new in the Programming World
      </p>
    </div>
  );
};

export default Header;
