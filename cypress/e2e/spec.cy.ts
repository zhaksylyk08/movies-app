describe("movies-app tests", () => {
  it("All genres are displayed", () => {
    cy.visit("/");
    cy.get("ul.genre-select li")
      .should("not.be.empty")
      .and(($li) => {
        expect($li.first()).to.contain("All");
      });
  });

  it("Selected genre is highlighted", () => {
    cy.visit("/");
    cy.get("ul.genre-select li")
      .should("not.be.empty")
      .and(($li) => {
        $li.last().click();
        expect($li.last()).to.have.class("selected");
      });
  });
});
