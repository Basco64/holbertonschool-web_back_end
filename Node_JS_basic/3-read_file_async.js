const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');
      const field = studentData[3].trim();
      const firstName = studentData[0].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    console.log(`Number of students: ${students.length}`);

    for (const [field, students] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}`,
      );
    }

    // return Promise.resolve();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
