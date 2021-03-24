const Sports = require("../models/Sports");
const SportsList = require("./sports.json");

Sports.deleteMany({}).then(() => {
    Sports.create(SportsList).then((output) => {
        console.log(output);
        Sports.find({})
            .then((res) =>
                console.log(res))
    })
        .catch((err) => {
            console.log(err)
        })
})

