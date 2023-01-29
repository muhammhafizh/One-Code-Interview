import Col from "react-bootstrap/Col";

function DetailsProfile({ data }) {
  return (
    <>
      <Col xs={5} md={1}>
        <div>
          <p className="text-secondary">Username:</p>
          <p className="text-secondary">Email:</p>
          <p className="text-secondary">Address:</p>
          <p className="text-secondary">Phone:</p>
        </div>
      </Col>
      <Col>
        <div>
          <p className="text-bold">{data?.name}</p>
          <p className="text-bold">{data?.email}</p>
          <p className="text-bold">{data?.address?.city}</p>
          <p className="text-bold">{data?.phone}</p>
        </div>
      </Col>
    </>
  );
}

export default DetailsProfile;
