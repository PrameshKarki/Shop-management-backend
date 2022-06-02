const express = require("express");
const router = express.Router();
const menuController = require("../controller/menu-controller");

router.get('/menu', menuController.getMenu);
router.post('/menu/add', menuController.addMenu);
router.post('/menu/delete', menuController.deleteMenu);

module.exports = router; 