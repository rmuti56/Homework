import { PostList } from "@/components";
import { useEffect } from "react";

const PostsPage = () => {
  useEffect(()=>{
    document.title = "Posts"
  })
  console.log('render')
  return (
    <div>
      <h1>MAQE Forums</h1>
      <h3>Subtitle</h3>
      <h4>Posts</h4>
      <PostList />
    </div>
  );
};

export default PostsPage;
