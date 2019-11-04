// As a user
// So I can find unwanted food
// I can view a list of available food

describe('Home page', function() {
  it('allows user to view posts', function() {
    cy.visit('/');
    cy.get('a[name=login]').click();
    cy.get('input[name=email]').type(`angry@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('input[name=login_submit][type=submit]').click();
    cy.get('ul>:nth-child(1)>a').click();
    cy.url().should('include', '/posts')
  });
});
