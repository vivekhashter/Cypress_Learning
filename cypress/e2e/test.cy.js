describe('empty',()=>{
    it('Google search',()=>{
        cy.visit('https://www.google.com/');
         cy.get('nonexistent-element').should('exist');
        })
})
