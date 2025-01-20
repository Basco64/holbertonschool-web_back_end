const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const dbPath = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
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

    let result = `Number of students: ${students.length}\n`;
    for (const [field, students] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${
        students.length
      }. List: ${students.join(', ')}\n`;
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');

  try {
    const studentsInfo = await countStudents(dbPath);
    res.end(studentsInfo);
  } catch (error) {
    res.end('Cannot load the database');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
