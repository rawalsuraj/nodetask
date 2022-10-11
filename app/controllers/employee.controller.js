const { Employee } = require("../models");

// Create and Save a new Chat
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      success: false,
      message: "Content can not be empty!"
    });
  }

  let payload = req.body;
  if(req.filename) {
    const filename = req.file.filename;
    if(filename) {
      payload = {...req.body, photo: filename}
    }
  }
  // Save Employee
  Employee.create(payload)
    .then(data => {
      return res.status(200).send({
        success: true,
        data
      });
    })
    .catch(err => {
      return res.status(500).send({
        success: false,
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Find Employee
exports.getSingle = (req, res) => {
  Employee.findOne(
    {
      _id: req.params.id
    }).exec()
    .then(data => {
      return res.status(200).send({
        success: true,
        data
      });
    })
    .catch(err => {
      return res.status(500).send({
        success: false,
        message: "Error retriving employee"
      });
    });
};

// Retrieve all Employees
exports.findAll = (req, res) => {
  Employee.find({})
    .then(data => {
      return res.status(200).send({
        success: true,
        data
      });
    })
    .catch(err => {
      return res.status(500).send({
        success: false,
        message:
          err.message || "Some error occurred while retrieving Employees."
      });
    });
};

// Update Employee
exports.update = (req, res) => {
  Employee.findOneAndUpdate(
    {
      _id: req.params.id
    },
    req.body).exec()
    .then(() => {
      return res.status(200).send({
        success: true,
        message: "Employee updated successfully."
      });
    })
    .catch(err => {
      return res.status(500).send({
        success: false,
        message: "Error updating employee"
      });
    });
};

// Delete Employee
exports.delete = (req, res) => {
  Employee.findByIdAndRemove(req.params.id).exec()
    .then(() => {
      return res.status(200).send({
        success: true,
        message: "Employee deleted successfully."
      });
    })
    .catch(err => {
      return res.status(500).send({
        success: false,
        message: "Error deleting employee"
      });
    });
};