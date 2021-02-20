import { Loading, Pagination } from "@/components/common";
import { AuthorService, PostService } from "@/services";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { StyledPostList } from "./styled-post";
const PAGE_SIZE = 8;
const PostList = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalItem: 0,
    itemPerPage: PAGE_SIZE,
    itemCount: 0,
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    handleGetPostsAndMapAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.currentPage]);
  const handleGetPostsAndMapAuthors = async () => {
    try {
      const postsResponse = await PostService.getPosts({
        page: pagination.currentPage,
        limit: pagination.itemPerPage,
      });
      const authorsResponse = await AuthorService.getAuthors();

      setPagination({
        currentPage: Number(postsResponse.currentPage),
        itemPerPage: postsResponse.itemPerPage,
        itemCount: postsResponse.itemCount,
        totalItem: postsResponse.totalItem,
      });
      const postsMapAuthors = postsResponse.items.map((post) => {
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
    setLoading(true);
    setPagination((prev) => ({ ...prev, currentPage: nextPage }));
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center error">Something Wrong</div>;
  }

  return (
    <StyledPostList>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination
        totalItem={pagination.totalItem}
        currentPage={pagination.currentPage}
        pageSize={pagination.itemPerPage}
        handlePageChange={handlePageChange}
      />
    </StyledPostList>
  );
};

export default PostList;
