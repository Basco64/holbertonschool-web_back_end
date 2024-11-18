export default function updateUniqueItems(list) {
  if (!(list instanceof Map)) {
    throw new Error('Cannot process');
  }

  list.forEach((quantity, item) => {
    if (quantity === 1) {
      list.set(item, 100);
    }
  });

  return list;
}
