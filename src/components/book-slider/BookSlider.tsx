import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { bookList } from "../../mock-data/book_list";

const BookSlider = () => {
  const bookSubList=bookList.slice(0,4)
  return (
    <Row xs={1} md={2} lg={4} className="g-4 mt-2">
      {bookSubList.map((b) => (
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={b.cover} />
            <Card.Body>
              <Card.Title>{b.name}</Card.Title>
              <Card.Text>{b.rating}</Card.Text>
              <Card.Link href={b.url}>Description</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BookSlider;
