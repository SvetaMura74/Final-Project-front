import "./App.css";
import {useContext} from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Books1 from "./routes/books/Books";

import Navbar1 from "./components/navbar/Navbar1";
import Search from "./routes/search/Search";

import Footer from "./components/footer/Footer";
import AuthContext from "./context/AuthContext";
import SignIn from "./routes/signin/SignIn";
import SignUp1 from "./routes/sign up/SignUp1";

import BookDetails from "./routes/books/BookDetails";
import AddBook from "./routes/books/AddBook";
import EditBook from "./routes/edit_book/EditBook";




function App() {
  const {isLoggedIn}= useContext(AuthContext)

  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books1 />} />
        <Route path="/books/:book_id" element={<BookDetails />} />
        {isLoggedIn && <Route path="/books/add" element={<AddBook />} />}

        <Route path="/search" element={<Search />} />
        {!isLoggedIn && <Route path="/signin" element={<SignIn />} />}
        {!isLoggedIn && <Route path="/signup" element={<SignUp1 />} />}
        {isLoggedIn && (
          <Route path="/books/:book_id/edit" element={<EditBook />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
