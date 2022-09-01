describe('Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', () => {
    //Antes de cada prueba se abrira esta URL
    beforeEach(() => {
        cy.visit('https://www.movistar.com.ar/');
    })

    //Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB
    
    it('Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', () => {
        cy.get('.device-carousel-title > a').click();
        cy.get('#layered-filter-block > .block-title').click();
    }) 
    
})