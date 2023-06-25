import { useState } from "react";

import {  useNavigate } from "react-router-dom";
import { Books} from "../../@types";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ColorRing } from "react-loader-spinner";
import authService from "../../services/auth.service";
import Swal from "sweetalert2";
import { urlRegex } from "../../services/utils";

const AddBook = () => {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(undefined);
  
  const initialValues: Books = {
    book_id: "",
    position: "",
    name: "",
    author: "",
    cover: "",
    rating: 1,
    description: "",
    genres: "",
  };
  const validationSchema = Yup.object({
    book_id: Yup.string().min(8, "must be 8 digits").max(8).required(),
    position: Yup.string().min(1).max(30).required(),
    name: Yup.string().min(3, "book name is too short").max(30).required(),
    author: Yup.string().min(3, "author name is too short").max(30).required(),
    cover: Yup.string().matches(urlRegex,"must be URL fotmat").required(),
    rating: Yup.number(),
    description: Yup.string()
      .min(10, "description is too short")
      .max(100)
      .required(),
    genres: Yup.string().min(5).max(40)
  });

  const handleAddBook = (formValues: Books) => {
    setIsLoading(true);
    const {
      book_id,
      position,
      name,
      author,
      cover,
      rating,
      description,
      genres,
    } = formValues;
    authService
      .addBook(
        book_id,
        position,
        name,
        author,
        cover,
        rating,
        description,
        genres
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: "The Book Is Saved",
          icon: "success",
        });
        nav("/books");
      })
      .catch((e) => {
       
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: `${JSON.stringify(e.response.data.message)}`,
        });
     
      })

      .finally(() => {
        setIsLoading(false);
      });
  };

  

  return (
    <div>
      {errMessage && <div>${errMessage}</div>}
      {isLoading && (
        <div className="mx-auto w-25 text-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#EEECDA", "#F08A5D", "#B83B5E", "#6A2C70", "#849b87"]}
          />
        </div>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleAddBook}
        validationSchema={validationSchema}
      >
        <Form className="w-50 mx-auto">
          <div>
            <label htmlFor="book_id" className="form-label">
              Book_id
            </label>
            <Field
              name="book_id"
              type="book_id"
              className="form-control"
              id="book_id"
            />
            <ErrorMessage
              name="book_id"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="position" className="form-label">
              Position
            </label>
            <Field
              name="position"
              type="position"
              className="form-control"
              id="position"
            />
            <ErrorMessage
              name="position"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field name="name" type="name" className="form-control" id="name" />
            <ErrorMessage
              name="name"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <Field
              name="author"
              type="author"
              className="form-control"
              id="author"
            />
            <ErrorMessage
              name="author"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="cover" className="form-label">
              Cover
            </label>
            <Field
              name="cover"
              type="cover"
              className="form-control"
              id="cover"
            />
            <ErrorMessage
              name="cover"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <Field
              name="rating"
              type="rating"
              className="form-control"
              id="rating"
            />
            <ErrorMessage
              name="rating"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <Field
              name="description"
              type="description"
              className="form-control"
              id="description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="genres" className="form-label">
              Genres
            </label>
            <Field
              name="genres"
              type="genres"
              className="form-control"
              id="genres"
            />
            <ErrorMessage
              name="genres"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="col-12">
            <button
              disabled={isLoading}
              className="btn btn-primary mt-3"
              type="submit"
             
            >
              Add a Book
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBook;
