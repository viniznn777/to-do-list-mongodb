export const highlightText = (text, searchText) => {
  if (!searchText) return text;
  const regex = new RegExp(`(${searchText})`, "gi");
  return text.split(regex).map((word, index) =>
    regex.test(word) ? (
      <span style={{ color: "red", fontWeight: "bold" }} key={index}>
        {word}
      </span>
    ) : (
      word
    )
  );
};
