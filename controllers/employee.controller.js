const Employee = require("../models/employees.model.js");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Employee.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Employee.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/add", async (req, res) => {
  const data = new Employee({
    fullName: req.body.fullName,
    position: req.body.position,
    location: req.body.location,
    salary: req.body.salary,
  });
  try {
    const save = await data.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Employee.findByIdAndUpdate(id, updatedData, options);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Employee.findByIdAndDelete(id);
    res.send(`Employee ${data.fullName} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
