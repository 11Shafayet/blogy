const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

module.exports = function (userCollection) {
  router
    .route('/')
    .get(async (req, res) => {
      const data = req.body;
      const result = await userCollection.find(data).toArray();
      res.send(result);
    })
    .post(async (req, res) => {
      const data = req.body;
      const { name, email, password } = data;

      if (!name || !email || !password) {
        res.status(400).send('Please fill up all the fields!');
        return;
      }

      const isUserExists = await userCollection.findOne({ email });

      if (isUserExists) {
        res.status(400).send('User already exists with this email!');
        return;
      }

      const salt = await bcrypt.genSalt(10);
      encryptedPassword = await bcrypt.hash(password, salt);
      const newData = {
        name,
        email,
        password: encryptedPassword,
      };

      const result = await userCollection.insertOne(newData);
      res.send(result);
    });

  return router;
};
