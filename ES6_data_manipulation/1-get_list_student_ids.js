export default function getListStudentIds(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.map((student) => student.id);
  }
  return [];
}
