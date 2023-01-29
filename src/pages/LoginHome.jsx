import { useEffect, useState } from "react";
import { instance } from "../API/AxiosConfig";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostsComponents from "../components/PostsComponents";
import PaginationComponent from "../components/PaginationComponent";

function LoginHome() {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      const getPosts = await instance.get("posts?_page=1&_limit=10");
      const total = await getPosts.headers.get("x-total-count");
      const postsData = await getPosts.data;
      setPosts(postsData);
      setPageCount(total / 10);
    };

    getPosts();
  }, []);

  const fetchNewData = async (currentPage) => {
    const res = await instance.get(`posts?_page=${currentPage}&_limit=10`);
    return res.data;
  };

  const handleChangePage = async (data) => {
    let currentPage = data.selected + 1;

    const getNewPosts = await fetchNewData(currentPage);
    setPosts(getNewPosts);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          {posts.map((item) => {
            return <PostsComponents item={item} key={item.id} />;
          })}
          <PaginationComponent
            pageCount={pageCount}
            onPageChange={handleChangePage}
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginHome;
