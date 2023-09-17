
/// <reference types= "cypress" /> 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
  describe('Aspire test cases', () => {
  it('randomly enter the website arabic or englies ', () => {
    let Websites = ["https://www.almosafer.com/ar","https://www.almosafer.com/en"]
let RandomIndex =Math.floor(Math.random()*Websites.length)
    cy.visit(Websites[RandomIndex])
    let ArabicCities = ["عمان","قطر"]
    let ArabicRandomIndex = Math.floor(Math.random()*ArabicCities.length)    
    let EnglishCities =["amman","doha"]
    let EnglishRandomIndex =Math.floor(Math.random()*EnglishCities.length)
    cy.get('.cta__saudi').click();
    cy.get('#uncontrolled-tab-example-tab-hotels').click();
if(RandomIndex == 0){
  cy.get('[data-testid="AutoCompleteInput"]').type(ArabicCities[ArabicRandomIndex])
}else{
  cy.get('[data-testid="AutoCompleteInput"]').type(EnglishCities[EnglishRandomIndex])
}

     });
});