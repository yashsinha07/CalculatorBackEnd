const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Basic Addition Calculator
app.get("/", function (request, response) {
    response.sendFile(__dirname+"/index.html");
});

app.post("/", function (request, response) {
    var num1 = Number(request.body.n1);
    var num2 = Number(request.body.n2);

    var result = num1 + num2;

    response.send("The result of the calculation is: " + result);
})

//BMI Calculator
app.get("/bmiCalculator", function (request, response) {
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (request, response) {
    var weight = Number(request.body.weight);
    var height = Number(request.body.height);

    var bmi = weight / (height * height);

    response.send("The BMI is: " + bmi);
})

app.listen(3000, function () {
    console.log("Server started on port 3000...");
})