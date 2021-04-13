const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const essays = require("./routes/api/essays");
const drafts = require("./routes/api/drafts");
const reviews = require("./routes/api/reviews");
const categories = require("./routes/api/categories");
const passport = require('passport');
const path = require('path');

const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/essays", essays);
app.use("/api/drafts", drafts);
app.use("/api/reviews", reviews);
app.use("/api/categories", categories);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));