import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { bookList } from "../../mock-data/book_list";

const BookSlider = () => {
  const bookSubList = bookList.slice(0, 4);
  return (
    <Row xs={1} md={2} lg={4} className="g-4 mt-2">
      {bookSubList.map((b) => {
        return (
          <Col key={b.book_id}>
            <Card className="h-100">
              <Card.Img variant="top" src={b.cover} />
              <Card.Body>
                <Card.Title>{b.name}</Card.Title>
                <Card.Text>Rating: {b.rating}</Card.Text>
                <Card.Text>Author: {b.author}</Card.Text>
                <Card.Text>Genres: {b.genres}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default BookSlider;
