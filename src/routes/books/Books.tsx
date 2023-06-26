import { useContext, useEffect, useState } from "react";
import { Books } from "../../@types";
import Row from "react-bootstrap/Row";

import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Books1 = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const bookUrl = "http://localhost:3001/api/books/";
  const nav = useNavigate();

  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    fetch(bookUrl)
      .then((res) => res.json())
      .then((data) => {
        const allBooks = data;
        setBooks(allBooks);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {isLoggedIn && (
        <button
          className="btn btn-primary p-1 mb-3"
          onClick={() => nav(`/books/add`)}
        >
          Add New Book
        </button>
      )}
      <Row xs={1} md={2} lg={4} className="g-4 mt-2">
        {books.map((book) => (
          <BookItem {...book} key={book.book_id} />
        ))}
      </Row>
    </>
  );
};

export default Books1;
