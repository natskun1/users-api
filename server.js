const express = require("express");

const app = express();

const users = [
  {
    LastName: "Parantar",
    FirstName: "Nathaniel",
    Email: "nathaniel@gmail.com",
    Password: "password123"
  },
  {
    LastName: "Cabansag",
    FirstName: "Cathy",
    Email: "cathy@gmail.com",
    Password: "hello456"
  },
  {
    LastName: "Lab",
    FirstName: "Drippy",
    Email: "drippy@gmail.com",
    Password: "test789"
  }
];

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});