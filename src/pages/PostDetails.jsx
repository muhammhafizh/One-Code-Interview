import { instance } from "../API/AxiosConfig";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsPosts from "../components/DetailsPosts";
import CommentsComponent from "../components/Comments";
import { useParams } from "react-router-dom";

function PostDetailsPage() {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));

    instance
      .get(`posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          <DetailsPosts post={post} />
          <h5 className="text-secondary">All Comments</h5>
          {comments?.map((comment) => {
            return <CommentsComponent comment={comment} key={comment.id} />;
          })}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default PostDetailsPage;
