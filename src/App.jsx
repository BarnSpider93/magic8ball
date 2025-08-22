import { useState } from "react";
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");

  const responses = [
    "Yes, definitely.",
    "Ask again later.",
    "Don't count on it.",
    "It is certain.",
    "My sources say no.",
    "Outlook not so good.",
    "Yes, in due time.",
    "Very doubtful.",
    "Absolutely!",
    "Better not tell you now."
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setQuestion(input);
    setAnswer(getResponse());
    setInput("");
  }

  function getResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }

  return (
    <div>
      <form id="ask8Ball" onSubmit={handleSubmit}>
        <label htmlFor="question">Ask a question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={input}               // controlled input
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button id="askButton" type="submit">
          Ask the Magic 8 Ball
        </button>
      </form>

      {answer && (
        <div>
          <p>You asked: {question}</p>
          <p>The Magic 8-Ball says: {answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
