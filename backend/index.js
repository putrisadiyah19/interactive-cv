const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');
const apiRoutes = require('./routes/api');
const { certifications } = require('./data');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/certifications', (req, res) => res.json(certifications));
app.listen(PORT, () => {
console.log(` Server backend berjalan di http://localhost:${PORT}`);
});