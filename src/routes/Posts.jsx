import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import { getPosts } from "../api/post";

function Posts() {
  
  return (
    <>
    <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await getPosts();
  
  return response;
}