import { useState } from "react";
import Card from "react-bootstrap/Card";
import { instance } from "../API/AxiosConfig";
import Chat from "../assets/chat.png";

function PostsComponents({ item }) {
  const [commentsLength, setCommentsLength] = useState(0);

  const fetchComments = (postId) => {
    try {
      instance
        .get(`posts/${postId}/comments`)
        .then((res) => setCommentsLength(res.data.length));
    } catch (error) {
      console.log(error);
    } finally {
      return commentsLength;
    }
  };

  return (
    <Card className="mt-5" key={item.id}>
      <Card.Header className="fw-bolder">{item.title}</Card.Header>
      <Card.Body>{item.body}</Card.Body>
      <Card.Footer className="d-flex">
        <Card.Link className="text-decoration-none fw-semibold d-flex me-2">
          <img
            src={Chat}
            className="mb-1 me-1"
            style={{ width: "20px", height: "20px" }}
          />
          <Card.Text>{fetchComments(item.id)}</Card.Text>
        </Card.Link>
        <Card.Link
          href={`/details/${item.id}`}
          className="text-decoration-none fw-semibold"
        >
          Details
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default PostsComponents;
