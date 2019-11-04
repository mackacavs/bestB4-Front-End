// As a user
// So I can create an account
// I can sign up

describe('Home page', function() {
  it('allows user to sign up', function() {
    cy.visit('/');
    cy.get('.btn-primary').click();
    cy.get('input[name=name]').type(`BigTimeCharlie3{enter}`)
    cy.get('input[name=email]').type(`bigtimecharlie3@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('input[name=password2]').type(`123456{enter}`)
    cy.get('.btn-primary').click();
    cy.url().should('include', '/dashboard')
  });
});
