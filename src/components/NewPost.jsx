import styles from "./NewPost.module.css";
import { useState } from "react";

function NewPost({onCancel, onAddPost}) {
    const [enteredText, setEnteredText] = useState("");

    const [enteredAuthor, setEnteredAuthor] = useState("");
    
    function textChangeHandler(event) {
        setEnteredText(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredText,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={textChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" required onChange={authorChangeHandler}/>
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
