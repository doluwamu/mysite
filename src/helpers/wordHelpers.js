export const firstLetterToUpperCase = (sentence) => {
  if (!sentence || typeof sentence !== "string") return;

  const sentenceToArr = sentence.split("");
  const sentenceFirstLetterToUpperCase = sentenceToArr[0].toUpperCase();
  return sentenceFirstLetterToUpperCase + sentenceToArr.splice(1).join("");
};
