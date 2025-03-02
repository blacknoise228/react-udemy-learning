import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import styles from "./PostDetails.module.css";
import { getPostDetails } from "../api/post";

function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={styles.details}>
                <p>Could not find post.</p>
                <p>
                    <Link to=".." className={styles.btn}>Go back</Link>
                </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={styles.details}>
                <h1 className={styles.author}>{post.author}</h1>
                <p className={styles.text}>{post.post_text}</p>
                <p className={styles.actions}>
                    <Link to=".." className={styles.btn}>Go back</Link>
                </p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({ params }) {
    const post = await getPostDetails(params.id);
    return post;
}