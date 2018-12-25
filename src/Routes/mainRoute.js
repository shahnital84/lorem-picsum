const express = require('express');

const mainRouter = express.Router();
const mainController = require('../Controllers/mainController')();

const router = () => {
  mainRouter.route('/')
    .get(mainController.get);

  return mainRouter;
};

module.exports = router;