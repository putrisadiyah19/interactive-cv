const express = require('express');
const router = express.Router();

const { educationHistory, skills, projects } = require('../data');

router.get('/education', (req, res) => {
  res.json(educationHistory);
});

router.get('/skills', (req, res) => {
  res.json(skills);
});

router.get('/projects', (req, res) => {
  res.json(projects);
});

module.exports = router;