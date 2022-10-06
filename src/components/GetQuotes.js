import React, { useState, useEffect, useRef } from "react";
import './style.css'


const GetQuotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const colorRef = useRef(null);

  const COLORS = [
    '#edf2fb',
    '#daf0ee',
    '#feefdd',
    '#ffcbf2',
    '#ddd7eb3',
    '#f5daeff'
  ]

  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const getRandomQuote = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let getRandomNumber = Math.floor(Math.random() * data.quotes.length);
        let getQuote = data.quotes[getRandomNumber];
        setQuote(getQuote.quote);
        setAuthor(getQuote.author);
      });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(()=> {
    colorRef.current.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  }, [quote])

  return (
    <div className="quote-container" ref={colorRef}>
      <h4 id="quote">{quote}</h4>
      <p id="author">- {author} -</p>
      <button onClick={getRandomQuote}>Generate new</button>
    </div>
  );
};

export default GetQuotes;
