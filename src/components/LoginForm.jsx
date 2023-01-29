import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef, useState, useEffect } from "react";
import { instance } from "../API/AxiosConfig";
import { Auth } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const userName = useRef("");
  const userPassword = useRef("");
  const [userHaveAccount, setUserHaveAccount] = useState(true);
  const [userAccount, setUserAccount] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get("users")
      .then((res) =>
        res.data.map((person) =>
          setUserAccount((prevData) => [...prevData, person])
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const filterSameUser = [...new Set(userAccount)];
    var found = false;
    var userData = [];

    filterSameUser.map((user) => {
      if (user.username === userName.current.value) {
        userData = [user];
        found = true;
      }
    });

    if (found) {
      Auth.storeUserInfoToCookie(userData[0].name, userData[0].id);
      navigate("/home");
    } else {
      setUserHaveAccount(false);
      console.log("akun tidak ada");
    }
  };

  return (
    <Form>
      <Container className="position-absolute top-50 start-50 translate-middle">
        <Row>
          <Col></Col>
          <Col xs={12} md={4}>
            <p className="mb-5 text-center fw-bold">Login Page</p>
            {!userHaveAccount && (
              <p className="text-danger fs-6 fw-lighter">
                Nama Tidak Ditemukan
              </p>
            )}
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" ref={userName} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" ref={userPassword} />
            </FloatingLabel>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleClick(e)}
              >
                Submit
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Form>
  );
}

export default LoginForm;
