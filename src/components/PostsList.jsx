import styles from "./PostsList.module.css";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

function PostsList() {

  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.post_text}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
