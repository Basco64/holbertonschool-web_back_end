export default function getStudentsByLocation(arr, loc) {
  return arr.filter((stud) => stud.location === loc);
}
