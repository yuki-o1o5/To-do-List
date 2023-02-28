import styles from "components/List/List.module.css";
const List = ({ myList }) => {
  return (
    <li className={styles.li}>
      <div className={styles.writtenInputContainer}>
        <input
          className={styles.writtenInput}
          type="checkbox"
          id="writtenInput"
        />
        <label htmlFor="writtenInput" className={styles.writtenLabel}>
          {myList}
        </label>
        <button className={styles.x}>x</button>
      </div>
    </li>
  );
};

export default List;
