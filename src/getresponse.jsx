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

function getResponse() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

export default getResponse;
