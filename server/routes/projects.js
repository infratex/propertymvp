const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, description, budget, userId } = req.body;

        const project = new Project({ title, description, budget, userId });
        await project.save();

        res.status(201).json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
