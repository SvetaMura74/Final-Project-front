import axios from "axios";


const baseUrl = "http://localhost:3001/api/auth";
const signUp = (
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string
) => {
  return axios.post(baseUrl + "/signup", {
    firstName,
    lastName,
    userName,
    email,
    password,
  });
};
const signIn = (email: string, password: string) => {
  return axios.post(baseUrl + "/signin", { email, password }).then((res) => {
    const token = res.data.accessToken;
    const email = res.data.email;
    const username = res.data.username;
    const roles = res.data.roles;
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("roles", roles);
      localStorage.setItem(
        "user",
        JSON.stringify({ email, username, token, roles })
      );
    }
    return res.data;
  });
};

const logOut = () => {
  localStorage.removeItem("token");
};
const addBookUrl = "http://localhost:3001/api/books";
const token = localStorage.getItem("token");

const addBook = (
  book_id: string,
  position: string,
  name: string,
  author: string,
  cover: string,
  rating: number,
  description: string,
  genres: string
) => {
  return axios.post(
    addBookUrl,
    {
      book_id,
      position,
      name,
      author,
      cover,
      rating,
      description,
      genres,
    },
    {
      headers: {
        'Authorization':token,
      }
    }
  );
};

export { signIn, signUp, logOut };
const authService = { signIn, signUp, logOut, addBook };
export default authService;
