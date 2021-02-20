import { API_URL } from "@/constant";

const getAuthors = async () => {
  const response = await fetch(`${API_URL}/authors.json`);
  return await response.json();
};

const AuthorService = {
  getAuthors,
};

export default AuthorService;
