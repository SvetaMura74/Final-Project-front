import { useNavigate } from "react-router-dom";
import { Books } from "../../@types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


const BookItem = (props: Books) => {
  const nav = useNavigate();
  
  return (
    <Col key={props.book_id}>
      <Card className="h-100">
        <Card.Img variant="top" src={props.cover} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Rating: {props.rating}</Card.Text>
          <Card.Text>Author: {props.author}</Card.Text>
          <Card.Text>Genres: {props.genres}</Card.Text>
        </Card.Body>
        <div className=" d-flex justify-content-center">
          <button
             className="btn btn-secondary col"
            onClick={() => {
              nav(`/books/${props.book_id}`);
            }}
          > More About This Book
           
          </button>
          
          
        </div>
      </Card>
    </Col>
  );
};

export default BookItem;
