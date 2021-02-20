import { API_URL } from "@/constant";

const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts.json`);
  return await response.json();
};

const PostService = {
  getPosts,
};

export default PostService;
