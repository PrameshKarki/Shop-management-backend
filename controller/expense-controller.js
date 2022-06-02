exports.getExpense = (request, response, next) => {
    console.log("inside get expense.")
    response.send("this is cool. expense");
}
exports.addExpense = (request, response, next) => {
    console.log("inside post expense.")
    response.send("this is cool. add expense");
}
exports.deleteExpense = (request, response, next) => {
    console.log("inside delete expense.")
    response.send("this is cool. delete expense");
}