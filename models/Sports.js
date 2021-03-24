const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Sports = new Schema


    ({

        sport: String,
        image_url: String,
        info: String,
        location1: [
            {
                place: String,
                ages: String,
                days: String,
                times: String
            },
            {
                place: String,
                ages: String,
                days: String,
                times: String

            },
            {
                place: String,
                ages: String,
                days: String,
                times: String
            }
        ],
        location2: [ 
            {
                place: String,
                ages: String,
                days: String,
                times: String
            },
            {
                place: String,
                ages: String,
                days: String,
                times: String
            },
            {
                place: String,
                ages: String,
                days: String,
                times: String
            }
        ]
    })

module.exports = mongoose.model("Sports", Sports)
