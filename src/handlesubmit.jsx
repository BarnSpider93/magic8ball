import { useState } from "react";
import getResponse from './getresponse'



  

function handleSubmit(e) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [input, setInput] = useState("");

    e.preventDefault();
    setQuestion(input);
    setAnswer(getResponse());
    setInput("");
}

 export default handleSubmit