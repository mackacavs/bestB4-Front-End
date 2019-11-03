// As a user
// So I can access my account
// I can log in

describe('Home page', function() {
  it('allows user to log in', function() {
    cy.visit('/');
    cy.get('button[name=login]').click();
    cy.get('input[name=email]').type(`bigtimecharlie3@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('button[name=login_submit]').click();
    cy.url().should('include', '/dashboard')
  });

  it('stay in the login page with wrong email format', function() {
    cy.visit('/');
    cy.get('button[name=login]').click();
    cy.get('input[name=email]').type(`bigtimecharlie3{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('button[name=login_submit]').click();
    cy.url().should('include', '/login');
  });

  it('stay in the login page with wrong password format', function() {
    cy.visit('/');
    cy.get('button[name=login]').click();
    cy.get('input[name=email]').type(`bigtimecharlie3@gmail.com{enter}`)
    cy.get('input[name=password]').type(`12345{enter}`)
    cy.get('button[name=login_submit]').click();
    cy.url().should('include', '/login');
  });
});
