import React from "react";
import "./app.css";
import { FaGithubSquare } from "react-icons/fa";
import Review from "./components/Review";

const App = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Team</h2>
            <div className="underline"><span></span></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
};

export default App;
