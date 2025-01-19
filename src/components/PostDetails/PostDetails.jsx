import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { id, title, body } = post;
  console.log(postId);

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Details of: {id}</h2>
      <h4>Title: {title}</h4>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
