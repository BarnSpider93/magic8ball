function AskQuestion({ input, setInput, handleSubmit }) {
  return (
    <form id="ask8Ball" onSubmit={handleSubmit}>
      <label htmlFor="question">Ask a question:</label>
      <input
        type="text"
        id="question"
        name="question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button id="askButton" type="submit">
        Ask the Magic 8 Ball
      </button>
    </form>
  );
}

export default AskQuestion;
