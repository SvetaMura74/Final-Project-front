import React from "react";
import"./About.scss"

const About = () => {
  return (
    <div className="container card p-5 m-4">
      <h2 className="text-center m-3">What is this App about?</h2>
      <h4 className="text-center m-3">
        This app is about books, because I'm a Big Book Fun!
      </h4>
      <p>
        From the Home page you can go to the book-list(page Books).The Books
        page contains various books. To see more details click "More About This
        Book" Button. The About page is telling you what this project is about.
        By clicking on the Search link you'll navigate to the Search page with
        different search options(by the name of the book and by author).To sign
        up please click the Sign Up link and provide the needed details.To sign
        in click the Sign In link.Once you're signed in,the Log Out link will
        show in the menu bar.
      </p>
    </div>
  );
};

export default About;
