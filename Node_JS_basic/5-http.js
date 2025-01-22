const fs = require('fs').promises;
const http = require('http');

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    try {
      const studentsInfo = await countStudents(dbPath);
      res.end(studentsInfo);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
