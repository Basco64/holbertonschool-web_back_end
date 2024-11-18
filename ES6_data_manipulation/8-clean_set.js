export default function cleanSet(set, startString) {
  // if (startString === '') {
  //   return '';
  // }

  const clean = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return clean;
}
