// As a user
// So I can access my account
// I can log in

describe('Home page', function() {
  it('allows user to log in', function() {
    cy.visit('/');
    cy.get('a[name=login]').click();
    cy.get('input[name=email]').type(`happy@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    // cy.get('input[name=login_submit][type=submit]').click();
    cy.url().should('include', '/profile')
  });

  it('stay in the login page with wrong email format', function() {
    cy.visit('/');
    cy.get('a[name=login]').click();
    cy.get('input[name=email]').type(`happy{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    // cy.get('input[name=login_submit][type=submit]').click();
    cy.url().should('include', '/login');
  });

  it('stay in the login page with wrong password format', function() {
    cy.visit('/');
    cy.get('a[name=login]').click();
    cy.get('input[name=email]').type(`happy@gmail.com{enter}`)
    cy.get('input[name=password]').type(`12345{enter}`)
    // cy.get('input[name=login_submit][type=submit]').click();
    cy.url().should('include', '/login');
  });
});
