import { Card } from "react-bootstrap";

function CommentsComponent({ comment }) {
  return (
    <Card className="mb-4 border border-0">
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {comment.email}
        </Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommentsComponent;
