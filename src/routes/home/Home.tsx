import BookSlider from "../../components/book-slider/BookSlider";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className=" quote-cont container-fluid text-center ">
        <h1 className="mb-5">Be a Reader!</h1>
        <br />
        <figure className="text-center">
          <blockquote className="blockquote">
            <q className="quote">
              A reader lives a thousand lives before he dies.The man who never
              reads lives only one.
            </q>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite>George R.R. Martin, american novelist</cite>
          </figcaption>
        </figure>
      </div>
      <BookSlider />
     
    </>
  );
};

export default Home;
