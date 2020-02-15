export const HomePage = {
  getBanner: () => cy.get(".hp-banner__text"),
  navBar: () => cy.get(".orb-nav-pri-container"),
  logo: () => cy.get(".orb-nav-blocks > a")
};
export const TopStories = {
  mainTopStories: () =>
    cy.get(".uk-hero-promos-container > .hp-module__container"),
  firstMainStory: () => cy.get(".hp-bp-m-one-half"),
  secondMainStory: () => cy.get(".hp-bp-m-one-quarter.hp-ts--news"),
  imageForEachTopStory: () =>
    cy.get(".top-story__wrapper.top-story--small-image"),
  imageForEachStory: () => cy.get('[data-bbc-asset-type="article"]')
};
