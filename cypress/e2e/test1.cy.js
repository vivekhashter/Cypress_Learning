/// <reference types= "cypress"/>

describe("Google Search", () => {
    it('should visit Google', () => {
      cy.visit('https://www.google.com/');
      cy.get('.gLFyf').type('Drake songs {Enter}');
    });
  });
  