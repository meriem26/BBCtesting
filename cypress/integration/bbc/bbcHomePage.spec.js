import { HomePage, TopStories } from "../../support/pageModules";
describe("BBC Home page", function() {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should return the Base URL",()=>{
     cy.url().should('equal',"https://www.bbc.co.uk/");
  })
  it("Should contain a title", () => {
    HomePage.getBanner().should("contain.text", "Welcome to the BBC");
  });
  it("Should contain a nav-bar", () => {
    HomePage.navBar().should("be.visible");
  });
  it("Should contain logo image of BBC ", () => {
    HomePage.logo().should(
      "have.css",
      "background-image",
      'none, url("https://nav.files.bbci.co.uk/orbit/1b2e292884201dd13064a9204e177864/img/blq-orbit-blocks_grey.svg")'
    );
  });
  it("Should load main top stories", () => {
    TopStories.mainTopStories().should("be.visible");
  });
  it("Should contain first main story", () => {
    TopStories.firstMainStory().should("be.visible");
  });
  it("Should contain second main story", () => {
    TopStories.secondMainStory().should("be.visible");
  });
  it("Should contain an image in each story", () => {
    TopStories.imageForEachTopStory().should("be.visible");
  });
  it("Should contain section", () => {
    cy.get("section:nth-child(1)").should("be.visible");
  });
  it("Should contain an image for each story", () => {
    TopStories.imageForEachStory().each($module => {
      cy.wrap($module)
        .find(".top-story__image")
        .should("have.length", 1);
    });
  });
});
