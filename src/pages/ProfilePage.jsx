import { useEffect, useState } from "react";
import { instance } from "../API/AxiosConfig";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsProfile from "../components/DetailsProfile";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col md={5}></Col>
        <DetailsProfile data={data} />
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
