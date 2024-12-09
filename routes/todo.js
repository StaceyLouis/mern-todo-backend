const express = require("express");
const router = express.Router();
const Model = require('../models/todo');

router.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get('/', async (req, res) => {
    const todos = await Model.find({});
    try {
        res.status(200).json(todos);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
.get('/:id', async (req, res) => {
    const id = req.params.id;
    const todo = await Model.findById(id).exec();
    
    try {
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
.post('/', async (req, res) => {
try{
    const newTask = new Model(req.body)
    await newTask.save()
    res.status(201).json(newTask)
} catch (error) {
    res.status(400).json({message: error.message})
}
})
.put("/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const update = {
        "$set": {
            "title": req.body.title,
            "checked": req.body.checked
        }
    };
    const options = { new: true };
    
    try {
        const updatedDocument = await Model.findOneAndUpdate(query, update, options);
        if (updatedDocument) {
            res.status(200).json(updatedDocument);
        } else {
            res.status(404).json({ message: "No document matches the provided query." });
        }
    } catch (err) {
        res.status(400).json({ message: `Failed to find and update document: ${err.message}` });
    }
})
.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await Model.findByIdAndDelete(id);
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
