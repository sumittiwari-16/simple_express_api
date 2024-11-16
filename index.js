const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  name = req.query.name;
  upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/merge', (req, res) => {
  firstName = req.query.firstname;
  lastName = req.query.lastname;
  merger = firstName + ' ' + lastName;
  res.send(merger);
});

app.get('/date', (req, res) => {
  monthToday = req.query.month;
  yearToday = req.query.year;
  final = monthToday + ', ' + yearToday;
  res.send(final);
});

app.get('/hi', (req, res) => {
  urName = req.query.name;
  final1 = 'Namaste, ' + urName + ' !';
  res.send(final1);
});

app.get('/email', (req, res) => {
  let Email = req.query.email;
  let Domain = req.query.domain;
  let final = Email + '@' + Domain;
  res.send(final);
});

app.get('/sign', (req, res) => {
  let numberGiven = parseFloat(req.query.number);
  let result;
  if (numberGiven >= 0) {
    result = 'Positive';
  } else {
    result = 'Negative';
  }
  res.send('Number is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
