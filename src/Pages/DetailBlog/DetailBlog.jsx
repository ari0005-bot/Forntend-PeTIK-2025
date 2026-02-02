import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const DetailBlog = () => {
  const [post, setPost] = useState("");
  const [coments, setComents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const comentResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setPost(postResponse.data);
        setComents(comentResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Container className="mt-4 mb-5">
        <Row className="justify-content-center">
          <Col md="8">
            <Card className="h-100 w-100 shadow">
              <CardBody>
                <CardTitle tag="h3">{post.title}</CardTitle>
                <CardText className="text-muted">{post.body}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4>KOMENTAR</h4>
        <ListGroup>
          {coments
            .filter((c) => c.postId === parseInt(id))
            .map((comment) => (
              <ListGroupItem key={comment.id} className="mb-2">
                <b>{comment.name}</b>
                <p className="text-muted small">{comment.email}</p>
                <p>{comment.body}</p>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default DetailBlog;
