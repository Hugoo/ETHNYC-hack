// Each protocol could set its own metrics/score, coef, etc.
// Currently we use the same "model" for all communities
const COEFFICIENTS = {
  BALANCE: 0.5,
  VOTES: 10,
  INTERACTION: 4,
};

// https://stackoverflow.com/a/9035732/651299
export function randomDate(start: Date, end: Date) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return month + "/" + day + "/" + year;
}

export const computeCommunityScore = (
  balance: number,
  numberOfVotes: number,
  numberOfInteractions: number
) => {
  // TODO: add more metrics, use "max values", compute a real score

  return Math.round(
    numberOfVotes * COEFFICIENTS.BALANCE +
      balance * COEFFICIENTS.BALANCE +
      numberOfInteractions * COEFFICIENTS.INTERACTION
  );
};
