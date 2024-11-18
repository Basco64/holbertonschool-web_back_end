export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const clean = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return clean;
}
