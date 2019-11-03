// As a user
// So I can access my account
// I can log in

describe('Home page', function() {
  it('allows user to log in', function() {
    cy.visit('/');
    cy.get('.btn-light').click();
    cy.get('input[name=email]').type(`bigtimecharlie3@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('.btn-primary').click();
    cy.url().should('include', '/dashboard')
  });
  it('warns user with wrong email during log in', function() {
    cy.visit('/');
    cy.get('.btn-light').click();
    cy.get('input[name=email]').type(`bigtimecharlie3{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('.btn-primary').click();
    cy.url().should('include', '/login');
  });
});
