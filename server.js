const express = require('express');
const connectDB = require('./config/db');
const { check, validationResult } = require('express-validator');
const app = express();

// Connect to the database
connectDB();

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.get('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
});


app.listen(PORT, () => console.log(`Server has started at port ${PORT}`));

