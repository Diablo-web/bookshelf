import React, { useState } from "react";
import "./styles.css";

const bookShelf = {
  javascript: [
    {
      name: "You Don't Know JS!",
      description:
        "Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes. Yet, most developers haven't deeply contemplated how and why these decisions are made and the impacts on code maintainability.",
      rating: "4/5"
    },
    {
      name: "Eloquent JS",
      description:
        "This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope.",
      rating: "5/5"
    },
    {
      name: "JavaScript : The Good Parts",
      description:
        "The Good Parts, author Douglas Crockford focuses on the basics of some of the lesser-known yet desirable aspects of JavaScript. It’s only recently that these hidden features are getting the appreciation they deserve from the programming community.",
      rating: "4.2/5"
    }
  ],
  fiction: [
    {
      name: "Harry Potter and the Deathly Hallows",
      description:
        "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series.",
      rating: "4.5/5"
    },
    {
      name: "The Adventures of Sherlock Holmes",
      description:
        "In general the stories in The Adventures of Sherlock Holmes identify, and try to correct, social injustices. Holmes is portrayed as offering a new, fairer sense of justice.",
      rating: "5/5"
    },
    {
      name: "Life of Pi : A Novel",
      description:
        "Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001. The protagonist is Piscine Molitor Pi Patel, an Indian Tamil boy from Pondicherry who explores issues of spirituality and metaphysics from an early age. He survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger which raises questions about the nature of reality and how it is perceived and told. He is part of a Tamil speaking family.",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Pyjama Profit",
      description:
        "Pyjama Profit is a guide for millennials to get started with a self-sustained online freelance practice, while developing their skills needed to succeed. The book talks about in-demand online skills and the different paths one can take to become an expert in these fields. A stable income from freelancing in college was the bedrock that had allowed the authors to explore their ambitions further and get to where they are today. In the process, they've worked with many of their own batch mates, colleagues and friends to help them set up highly successful freelance careers. The author duo decided to detail their story of what worked for them and how anyone in the country could thrive without being tied down to a full-time job. The authors feel the timing of the book is perfect because of the growing freelance economy and growing aspirations among millennials to find a job they love and not just something that pays their bills.",
      rating: "4/5"
    },
    {
      name: "Rich Dad Poor Dad",
      description:
        "Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ).",
      rating: "4.5/5"
    },
    {
      name: "Zero to One",
      description:
        "Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. It is a condensed and updated version of a highly popular set of online notes taken by Masters for the CS183 class on startups, as taught by Thiel at Stanford University in Spring 2012.",
      rating: "4.2/5"
    }
  ]
};

var books = Object.keys(bookShelf);

export default function App() {
  const [genre, setGenre] = useState("javascript");

  function bookClickHandler(genre) {
    // processing
    console.log(genre);
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="bookshelf">
          📚
        </span>{" "}
        bookshelf
      </h1>
      <p>explore your genre.</p>
      {/* Actual output set by React using useState */}

      {books.map((genre) => {
        return (
          <button
            onClick={() => bookClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {bookShelf[genre].map((book) => {
          return (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={book.name}
            >
              <div>{book.name}</div>
              <div style={{ fontSize: "0.8rem", padding: "0.1rem" }}>
                description: {book.description}
              </div>
              <div style={{ fontSize: "1rem", padding: "0.1rem" }}>
                rating: {book.rating}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
