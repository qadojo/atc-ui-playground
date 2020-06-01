const nock = require("nock");

const apiMock = nock("http://localhost:8080")
  .persist()
  .post("/cats/requests", {
    catBreed: null,
    catGender: null,
    userEmail: "user@company.org",
  })
  .reply(200);
