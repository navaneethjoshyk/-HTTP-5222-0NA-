// src/Question.jsx
import { useState, useEffect } from "react";

const API_URL = "https://opentdb.com/api.php?amount=1&type=boolean";

function Question() {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const first = data.results[0];
        setCategory(first.category);
        setQuestion(first.question);
        setAnswer(first.correct_answer);
      })
      .catch((err) => {
        console.error("Error fetching trivia:", err);
      });
  }, []);

  if (!question) {
    return (
      <div className="question-card">
        <p>Loading question...</p>
      </div>
    );
  }

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <div className="question-card">
      <div className="question-category">
        Category: <strong>{category}</strong>
      </div>

      <h3
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <button type="button" onClick={handleReveal} className="reveal-btn">
        Reveal answer
      </button>

      {revealed ? (
        <div className="answer">
          Answer: <strong>{answer}</strong>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Question;
