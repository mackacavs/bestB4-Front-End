describe('Sign up page', function() {
  it('allows user to sign up', function() {
    cy.visit('/');
    cy.get('.btn-primary').click();
    cy.contains('Create Your Account')
  });
});
