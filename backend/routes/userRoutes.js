const express = require('express');

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
      const result = await userCollection.insertOne(data);
      res.send(result);
    });

  return router;
};
