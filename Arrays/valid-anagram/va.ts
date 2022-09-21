const reorder = (str: string) =>
  str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

const validAnagram = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  return reorder(s) === reorder(t);
};
