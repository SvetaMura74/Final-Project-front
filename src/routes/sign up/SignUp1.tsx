import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { SignUpFormType } from "../../@types";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ColorRing } from "react-loader-spinner";
import authService from "../../services/auth.service";
import Swal from 'sweetalert2'

const SignUp = () => {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(undefined);
  const { isLoggedIn } = useContext(AuthContext);
  const initialValues: SignUpFormType = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, "name is too short").max(30).required(),
    lastName: Yup.string().min(3, " last name is too short").max(30).required(),
    userName: Yup.string().min(3, "user name is too short").max(30).required(),
    email: Yup.string().email("must be a valid email").required(),
    password: Yup.string().min(8, "Password is too short").required(),
  });

  const handleSignUp = (formValues: SignUpFormType) => {
    setIsLoading(true);
    const { firstName, lastName, userName, email, password } = formValues;
    authService
      .signUp(firstName, lastName, userName, email, password)
      .then((res) => {
       /*  console.log(res.data); */
       Swal.fire({
         title: "Good job!",
         text: "The User Is Saved!Please Sign In! ",
         icon: "success",
       });
        nav("/signin");
      })
      .catch((e) => {
        /* alert(e);
        setErrMessage(JSON.stringify(e.response.data)); */
        /* setErrMessage( */
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: `${JSON.stringify(e.response.data.message)}`,
            
          })
      /*   ); */
        
      })
      
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
        onSubmit={handleSignUp}
        validationSchema={validationSchema}
      >
        <Form className="w-50 mx-auto">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field
              name="firstName"
              type="firstName"
              className="form-control"
              id="firstName"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field
              name="lastName"
              type="lastName"
              className="form-control"
              id="lastName"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <Field
              name="userName"
              type="userName"
              className="form-control"
              id="userName"
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="form-control"
              id="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="form-control"
              id="password"
            />
            <ErrorMessage
              name="password"
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
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
