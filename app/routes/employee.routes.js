const employee = require("../controllers/employee.controller.js");
const multer = require("multer");
const uploadConfig = require("../config/employee");
const upload = multer(uploadConfig);

const router = require("express").Router();

router.post("/", upload.single("photo"), employee.create);
router.get("/:id", employee.getSingle);
router.put("/:id", employee.update);
router.get("/", employee.findAll);
router.delete("/:id", employee.delete);

module.exports = router;