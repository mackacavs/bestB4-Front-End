// As a user
// So I can give away food I won't use
// I can list a food item

describe('Home page', function() {
  it('allows user to cerate a new post', function() {
    cy.visit('/');
    cy.get('a[name=login]').click();
    cy.get('input[name=email]').type(`usera@example.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('.form > [name="description"] ').type('Bacon')
    cy.get('.react-date-picker__inputGroup__day').type('25')
    cy.get('.react-date-picker__inputGroup__month').type('12')
    cy.get('.react-date-picker__inputGroup__year').type('2020')
    cy.get('.flex_container>.post-form>.form>.btn').click();
    cy.contains('Bacon')
  });
});
