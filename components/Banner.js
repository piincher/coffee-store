import styles from "./banner.module.css";
export const Banner = ({ buttonText, handleButton }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Shop</span>
      </h1>
      <p className={styles.subTitle}>discover your coffee stores</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleButton}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
