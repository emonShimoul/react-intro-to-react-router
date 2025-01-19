import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2>Details of: {id}</h2>
      <h4>Title: {title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
