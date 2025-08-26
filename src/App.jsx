import { useState } from "react";
import "./App.css";
import AskQuestion from "./askquestion";
import Response from "./Response";
import getResponse from "./getresponse";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQuestion(input);
    setAnswer(getResponse());
    setInput("");
  }

  return (
    <div>
      <AskQuestion 
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit} 
      />

      {answer && (
        <Response question={question} answer={answer} />
      )}
    </div>
  );
}

export default App;
