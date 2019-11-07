// As a user
// So I can create an account
// I can sign up

describe('Home page', function() {
  it('allows user to sign up', function() {
    cy.visit('/');
    cy.get('.btn-primary').click();
    cy.get('input[name=name]').type(`Userx{enter}`)
    cy.get('input[name=postcode]').type(`NW1 2EE{enter}`)
    cy.get('input[name=email]').type(`userx@example.com.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('input[name=password2]').type(`123456{enter}`)
    cy.get('input.btn.btn-primary').click();
    cy.url().should('include', '/profile')
  });
});
