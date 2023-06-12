import { useEffect, useState ,useContext} from "react";
import { Books } from "../../@types";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../../components/not-found/NotFound";
import { GrFavorite } from "react-icons/gr";
import { BsPencil } from "react-icons/bs";
import {RiDeleteBin5Line} from "react-icons/ri"
import AuthContext from "../../context/AuthContext";

const BookDetails = () => {
  const { book_id } = useParams();
  const nav = useNavigate();
   const { isLoggedIn } = useContext(AuthContext);
   const { isAdmin } = useContext(AuthContext);

  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    const bookUrl = "http://localhost:3001/api/books/";
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
  const foundBook = books.find((b) => b.book_id === book_id);
  if (foundBook === undefined) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-4 ">
            <img
              className="w-100 shadow-1-strong rounded mb-4"
              src={foundBook.cover}
              alt="book cover"
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-primary "
                onClick={() => {
                  nav(-1);
                }}
              >
                Go Back
              </button>
              {isLoggedIn &&(<button
                className="btn btn-secondary"
                onClick={() => {
                  nav("/");
                }}
              >
                Add to
                <GrFavorite />
              </button>)}
              {isAdmin && (
                <button
                  className="btn btn-info"
                  onClick={() => {
                    nav(`edit/${foundBook.book_id}`);
                  }}
                >
                  Edit
                  <BsPencil />
                </button>
              )}
              {isAdmin && (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    nav(`edit/${foundBook.book_id}`);
                  }}
                >
                  Delete
                  <RiDeleteBin5Line />
                </button>
              )}
            </div>
          </div>
          <div className="col-sm-8">
            <h2 className="text-center">{foundBook.name}</h2>
            <h3 className="text-center">{foundBook.author}</h3>
            <p className="text-left p-5 m-3">{foundBook.description}</p>
            <h4 className="">Rating:{foundBook.rating}</h4>
            <h4>Genres:{foundBook.genres}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
