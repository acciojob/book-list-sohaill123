//your JS code here. If required.
// Assuming you're trying to click on the .delete element
cy.get('.delete', { timeout: 10000 }).should('exist').click();
