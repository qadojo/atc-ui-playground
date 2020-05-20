const fetch = require("cross-fetch");

class CatsController {
  constructor(catsService) {
    this.catsService = catsService;
  }

  handleCreateCatRequest(req, res) {
    console.log(req.body);

    this.catsService
      .createCatRequest(req.body)
      .then(() => res.sendStatus(200))
      .catch((e) => {
        console.error(e);
        res.sendStatus(500);
      });
  }
}

module.exports = CatsController;
