import styles from "components/LinkBar/LinkBar.module.css";

const LinkBar = ({ number, item }) => {
  return (
    <div className={styles.linBarContainer}>
      <div className={styles.itemNumbers}>
        {number} {item}
      </div>
      <div className={styles.linkContainer}>
        <a href="#">All</a>
        <a href="#">Actives</a>
        <a href="#">Completed</a>
      </div>
    </div>
  );
};

export default LinkBar;
