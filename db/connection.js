const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/sportsapp";
}
mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
});
module.exports = mongoose;

