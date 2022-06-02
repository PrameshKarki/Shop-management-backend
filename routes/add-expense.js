const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expense-controller");

router.get('/expense', expenseController.getExpense);
router.post('/expense/add', expenseController.addExpense);
router.post('/expense/delete', expenseController.deleteExpense);

module.exports = router; 