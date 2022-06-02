const { response, request } = require("express");
const express = require("express");
const overviewRoutes = require("./routes/overview");
const addExpenseRoutes = require("./routes/add-expense");
const addMenuItemRoutes = require("./routes/add-menu-item");


const app = express();

app.use(overviewRoutes);
app.use(addExpenseRoutes);
app.use(addMenuItemRoutes);
app.use("/", (request, response, next) => {
    response.send("hey it is running");
})


app.listen(3000, () => {
    console.log("listening on port 3000");
})