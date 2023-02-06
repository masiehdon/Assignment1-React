import React, { useState } from "react";
import clocks from "./assets/clocks.jpg";
import "./App.css";

function App() {
  let articleHeading;
  let heading;
  const [show, setState] = useState(0);
  const showArticle = () => {
    const articles = document.querySelectorAll("div article");
    const articleNumber = articles.length;
    setState((show + 1) % articleNumber);
    const headingDiv = document.querySelector(".wrapper");
    heading = headingDiv.children.querySelector("h1");

    articleHeading = articles.forEach(
      (article) => {
        article.children.querySelector("h2");
      }

      // heading.textContent= articleHeading
    );
  };

  const changeHeading = function () {
    articleHeading.textContent = heading[show].textContent;
    console.log("Good!");
  };

 // const [] = useState();
  const showAllArticles = () => {
    const articles = document.querySelectorAll("div article");
    articles.forEach((article) => {
      article.classList.remove("hide");
    });
  };

  return (
    <div className="wrapper">
      <h1>My programming journey</h1>
      <article className={` ${show === 0 ? "show" : "hide"}`}>
        <h2 className="my-journey h2">My journey</h2>
        <p>
          My journey has just started. I have taken a few steps and am about to
          discover a whole new world!
        </p>
        <img src={clocks} alt="clocks" />
      </article>
      <article className={` ${show === 1 ? "show" : "hide"}`}>
        <h2 className="my-firt-project h2">My first React project</h2>
        <p>
          My first react project will be a simple dice that can be rolled every
          time a button is pressed. I am aware of the importance of taking small
          steps.
        </p>
        <img src={clocks} alt="clocks" />
      </article>
      <article className={`${show === 2 ? "show" : "hide"}`}>
        <h2 className="my-style h2">The style of my project</h2>
        <p>
          Like I said my project will be a simple one and so will the style.
          There will be a dark background with one dice and a button.
        </p>
        <img src={clocks} alt="clocks" />
      </article>
      <div>
        <button
          onClick={() => {
            showArticle();
            changeHeading;
          }}
        >
          Switch articles
        </button>
        <button className="toggleBtn" onClick={showAllArticles}>
          Show all articles
        </button>
      </div>
    </div>
  );
}

export default App;
