import { supabase } from "./api";

export async function addPost(postData) {
  const { data, error } = await supabase.from("posts").insert({
    post_text: postData.body,
    author: postData.author,
  });

  if (error) {
    console.error("Ошибка при добавлении поста:", error.message);
    return null;
  }

  return data;
}

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Ошибка при получении постов:", error.message);
    return [];
  }

  return data;
}
