import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { addPost, getPosts } from "../api/post";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    addPost(postData);
  }

  useEffect(() => {
    async function fetchPosts() {
      const response = await getPosts();
      setPosts(response);
    }

    fetchPosts();
    
  }, []);


  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <Post key={post.author} author={post.author} body={post.post_text} />
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
