import React from "react";
import Header from "./Header.jsx";
import Question from "./Questions.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Question />
      </main>
    </div>
  );
}

export default App;
