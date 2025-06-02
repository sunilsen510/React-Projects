const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}

export async function createPost(post) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to create post");
  return response.json();
}

export async function updatePost(post) {
  const response = await fetch(`${API_URL}/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to update post");
  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete post");
  return id;
}