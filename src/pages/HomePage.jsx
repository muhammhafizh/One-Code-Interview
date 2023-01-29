import Image from "react-bootstrap/Image";
import imagePic from "../assets/HomePage.png";
import Container from "react-bootstrap/esm/Container";

function HomePage() {
  return (
    <Container>
      <Image src={imagePic} className="img-fluid mt-5 ms-md-5" />
    </Container>
  );
}

export default HomePage;
