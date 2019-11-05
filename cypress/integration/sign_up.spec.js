// As a user
// So I can create an account
// I can sign up

// Test working but need to clear database.

describe('Home page', function() {
  it('allows user to sign up', function() {
    cy.visit('/');
    cy.get('.btn-primary').click();
    cy.get('input[name=name]').type(`Batman{enter}`)
    cy.get('input[name=postcode]').type(`NW1 2EE{enter}`)
    cy.get('input[name=email]').type(`batman@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('input[name=password2]').type(`123456{enter}`)
    cy.get('input.btn.btn-primary').click();
    cy.url().should('include', '/profile')
  });
});
