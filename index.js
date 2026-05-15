const express = require("express");
const app = express();

// first ci cd

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/add", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ result: a + b });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log("Running on port 3000"));
}