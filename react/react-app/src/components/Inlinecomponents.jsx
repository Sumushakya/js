//const header = { color: "blue", fontSize: "140px" };
/* <h1 style={header}>Inline Components</h1> */

import styles from "./inlinecomponents.module.css";
export default function InlineComponents() {
  return (
    <div>
      <h1 className={styles.header}>Inline Components</h1>
    </div>
  );
}
