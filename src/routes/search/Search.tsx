import { useEffect, useState } from "react";
import BookItem from "../books/BookItem"; 
import { Books } from "../../@types";


const Search = () => {
  const [query, setQuery] = useState(" ");
  const bookUrl = "http://localhost:3001/api/books/";

  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    fetch(bookUrl)
      .then((res) => res.json())
      .then((data) => {
        const allBooks = data as Books[];
        setBooks(allBooks);
      })
      .catch((e) => {
        console.log(e); 
      });
  }, []);

  return (
    <div className="container">
      <div className=" d-flex justify-content-center m-4 p-1">
        <input
          type="text"
          placeholder="Search by name"
          className="search"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>
      <div className=" d-flex justify-content-center m-4 p-1">
        <input
          type="text"
          placeholder="Search by author"
          className="search"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>

      <div className="list">
        {books
          .filter((book) => book.name.toLowerCase().includes(query))
          .map((book) => (
            <BookItem {...book} key={book.book_id} />
          ))}
      </div>
      <div className="list">
        {books
          .filter((book) => book.author.toLowerCase().includes(query))
          .map((book) => (
            <BookItem {...book} key={book.book_id} />
          ))}
      </div>
    </div>
  );
};

export default Search;
