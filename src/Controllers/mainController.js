const chalk = require('chalk');
const debug = require('debug')('app:mainController');
const axios = require('axios');

const mainController = () => {
  const get = (req, res) => {
    const url = 'https://picsum.photos/list';
    const pageNumber = req.query.page || 1;
    axios.get(url)
      .then((response) => {
        res.render('main/index.ejs', {
          pictures: response.data,
          pageNumber
        });
      })
      .catch((error) => {
        debug(chalk.red(error));
        res.send(`Error while get pictures from <a href='${url}'>${url}</a>`);
      });
  };

  return {
    get
  };
};

module.exports = mainController;