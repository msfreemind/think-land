const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const essays = require("./routes/api/essays");
const reviews = require("./routes/api/reviews");
const passport = require('passport');

const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/essays", essays);
app.use("/api/reviews", reviews);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));