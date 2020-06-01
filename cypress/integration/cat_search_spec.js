const nock = require("nock");

describe("cat request page", () => {
  let apiMock;

  before(() => {
  });

  it("searches for cat without any filters", () => {
    cy.visit("http://localhost:3000");

    cy.get("button").should("have.attr", "disabled");

    cy.get(".email").type("user@company.org");

    cy.get("button").should("not.have.attr", "disabled");

    cy.get("button").click();
  });
});
