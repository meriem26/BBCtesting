describe("BBC Home page", function() {
  beforeEach(() => {
    cy.visit("/");
  });
  it("It should contain a title", () => {
    cy.get(".hp-banner__text").should("contain.text", "Welcome to the BBC");
  });
  it("It should contain a nav-bar", () => {
    cy.get(".orb-nav-pri-container").should("be.visible");
  });
  it("It should contain logo image of BBC ", () => {
    cy.get(".orb-nav-blocks > a").should(
      "have.css",
      "background-image",
      'none, url("https://nav.files.bbci.co.uk/orbit/1b2e292884201dd13064a9204e177864/img/blq-orbit-blocks_grey.svg")'
    );
  });
});
