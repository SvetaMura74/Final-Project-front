import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { SignInFormType } from "../../@types";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ColorRing } from "react-loader-spinner";
import authService from "../../services/auth.service";
import Swal from "sweetalert2";

const SignIn = () => {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(undefined);
  const { isLoggedIn ,login} = useContext(AuthContext);
  const initialValues: SignInFormType = {
   
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    
    email: Yup.string().email("must be a valid email").required(),
    password: Yup.string().min(8, "Password is too short").required(),
  });

  const handleSignIn = (formValues: SignInFormType) => {
    setIsLoading(true);
    const { email, password } = formValues;
    authService
      .signIn( email, password)
      .then((res) => {
         console.log(res);
         const token=res.accessToken;
         const email= res.email;
         const username=res.username;
         login(username,email,token)
        Swal.fire({
          title: "You are logged in!",
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
        onSubmit={handleSignIn}
        validationSchema={validationSchema}
      >
        <Form className="w-50 mx-auto">
          
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
              Sign In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
