// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (email, password) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(email);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
  });
  Cypress.Commands.add("addBook", (bookEntity, isFavorite) => {
    cy.contains("Add new").click();
    cy.get("input[name=title]").type(bookEntity.title);
    cy.get("input[name=description]").type(bookEntity.desc);
    cy.get("input[name=authors]").type(bookEntity.authors);
    if (isFavorite) {
      cy.get("input[name=favorite]").click();
    }
    cy.get("button[type=submit]").click();
  });