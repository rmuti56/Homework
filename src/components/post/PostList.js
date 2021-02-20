import { AuthorService, PostService } from "@/services";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/common";
import PostCard from "./PostCard";
import { StyledPostList } from "./styled-post";
const PAGE_SIZE = 8;
const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    handleGetPostsAndMapAuthors();
  }, []);
  const handleGetPostsAndMapAuthors = async () => {
    try {
      const postsResponse = await PostService.getPosts();
      const authorsResponse = await AuthorService.getAuthors();
      const postsMapAuthors = postsResponse.map((post) => {
        const author = authorsResponse.find(
          (author) => author.id === post.author_id
        );
        return { ...post, author };
      });
      setPosts(postsMapAuthors);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div className="text-center error">Something Wrong</div>;
  }

  const getStartRender = () => {
    return (currentPage - 1) * PAGE_SIZE;
  };

  return (
    <StyledPostList>
      {posts
        .slice(getStartRender(), getStartRender() + PAGE_SIZE)
        .map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      <Pagination
        totalItem={posts.length}
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
        handlePageChange={handlePageChange}
      />
    </StyledPostList>
  );
};

export default PostList;
