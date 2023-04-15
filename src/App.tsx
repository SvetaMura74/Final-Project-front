import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Books from './routes/books/Books';
import Navbar1 from './components/navbar/Navbar1';
import Search from './routes/search/Search';
import SignIn from './routes/signin/SignIn';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>
    <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
