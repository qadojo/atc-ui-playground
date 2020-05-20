const fetch = require("cross-fetch");

const httpConfig = {
  uri: "http://localhost:8080",
};

class CatsApiClient {
  postCatRequest(catRequest) {
    return fetch(`${httpConfig.uri}/cats/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catRequest),
    }).then((response) =>
      response.ok
        ? response.text()
        : Promise.reject("unable to post cat request")
    );
  }
}

module.exports = CatsApiClient;
