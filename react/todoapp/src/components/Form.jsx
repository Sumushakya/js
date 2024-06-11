import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.input}
          placeholder="Enter Todo Item"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
