import { Card } from "react-bootstrap";

function DetailsPosts({ post }) {
  return (
    <Card className="mt-5 mb-5" key={post?.id}>
      <Card.Header className="fw-bolder">{post?.title}</Card.Header>
      <Card.Body>{post?.body}</Card.Body>
    </Card>
  );
}

export default DetailsPosts;
