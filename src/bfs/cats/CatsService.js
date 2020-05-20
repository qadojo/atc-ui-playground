class CatsService {
  constructor(catsApiClient) {
    this.catsApiClient = catsApiClient;
  }

  createCatRequest(catRequest) {
    return this.catsApiClient.postCatRequest(catRequest);
  }
}

module.exports = CatsService;
