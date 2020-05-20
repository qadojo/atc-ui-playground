const express = require("express");
const bodyParser = require("body-parser");

const CatsController = require("./cats/CatsController");
const CatsService = require("./cats/CatsService");
const CatsApiClient = require("./clients/CatsApiClient");

const app = express();
const port = 3001;

app.use(express.static("assets"));
app.use(bodyParser.json());

const catsApiClient = new CatsApiClient();
const catsService = new CatsService(catsApiClient);
const catsController = new CatsController(catsService);

app.post(
  "/cats/requests",
  catsController.handleCreateCatRequest.bind(catsController)
);

app.listen(port, () => console.log(`Started BFS on http://localhost:${port}`));
