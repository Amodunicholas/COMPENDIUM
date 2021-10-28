///<reference types = 'cypress' />
describe('visit compendium Site', () => {
    it('Navigate to Url', () =>{
        cy.visit('https://compendiumdev.co.uk')
    })

    it('show firstpage', () =>{
        cy.get('h1').click()
        
       
        
        })
        it('scroll to traningPage', () =>{
            cy.get('.coursesSection > .sectionHeading > h2').click()
        })

        it('scroll to block and newsPage', () =>{
            cy.get('.newsSection > .sectionHeading > h2').click()
        })

        it('scroll to send messagePage', () =>{
            cy.get('.hiringSection > .sectionHeading > h2').click()
            cy.get('.hiringSection > .simpleThumbGrid > :nth-child(1) > :nth-child(1) > :nth-child(3) > a').click()
        
            cy.get('#b_49cozf3a_973').click()
        })
})