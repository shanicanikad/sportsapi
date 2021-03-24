const express = require("express");
const app = express();
const sports = require("../models/Sports");
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.json());

// app.get("/", (req, res) => {
//     res.redirect("/covidTracking")
// })

app.get("/sports", (req, res) => {
    sports.find({}).then((sportsapp) => {
        res.json(sportsapp);
    });
});




app.get("/sports/:id", (req, res) => {
    sports.findById({ _id: req.params.id }).then(
        (sportsapp) => {
            res.json(sportsapp);
        }
    );
});



app.post("/sports", (req, res) => {
    console.log(req.body)
    sports.create(req.body).then((sportsapp) => {
        res.json(sportsapp);
    });
});



app.put("/sports/id/:id", (req, res) => {
    sports.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
    ).then((sportsapp) => {
        res.json(sportsapp);
    });
});







app.delete("/sports/:id", (req, res) => {
    sports.findByIdAndDelete(
        { _id: req.params.id },
        req.body
    ).then((sportsapp) => {
        res.json(sportsapp);
    });
});



app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

