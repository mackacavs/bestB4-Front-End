describe('Home page', function() {
  it('allows user to visit sign up page', function() {
    cy.visit('/');
    cy.get('.btn-primary').click();
    cy.contains('Create Your Account')
  });
});
