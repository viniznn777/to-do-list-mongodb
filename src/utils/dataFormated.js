export function dataFormated(date) {
  const dataReturned = date;
  const dataFormated = new Date(dataReturned);

  const day = dataFormated.getDate();
  const month = dataFormated.getMonth();
  const year = dataFormated.getFullYear();
  return `${day <= 9 ? "0" + day : day}/${
    month + 1 <= 9 ? "0" + (month + 1) : month + 1
  }/${year}`;
}
