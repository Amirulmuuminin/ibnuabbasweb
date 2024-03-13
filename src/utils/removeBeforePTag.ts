export function removeBeforeP(input: string): string {
  // Find the index of the first occurrence of "<p>"
  const index = input.indexOf("<p>");
  // If "<p>" is found, slice the string from the index of "<p>" to the end of the string
  // This includes "<p>" in the returned string
  return index !== -1 ? input.slice(index) : input;
}
