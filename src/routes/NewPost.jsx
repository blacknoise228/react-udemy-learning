import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import styles from "./NewPost.module.css";
import { addPost } from "../api/post";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to="..">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();

  const postData = Object.fromEntries(formData);

  await addPost(postData);

  return redirect("/");
}
