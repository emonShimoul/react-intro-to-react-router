import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      <div className="user">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
