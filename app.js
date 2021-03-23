const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
// const essays = require("./routes/api/essays");
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
// app.use("/api/essays", essays);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));