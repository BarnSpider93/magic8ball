function Response({ question, answer }) {
  return (
    <div>
      <p>You asked: {question}</p>
      <p>The Magic 8-Ball says: {answer}</p>
    </div>
  );
}

export default Response;
