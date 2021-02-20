import { API_URL } from "@/constant";

const getPosts = async (options = { page: 1, limit: 10 }) => {
  const response = await fetch(
    `${API_URL}/posts?page=${options.page}&limit=${options.limit}`
  );
  return await response.json();
};

const PostService = {
  getPosts,
};

export default PostService;
