describe('Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52', () => {
    //Antes de cada prueba se abrira esta URL
    beforeEach(() => {
        cy.visit('https://www.movistar.com.ar/');
    })

    //Buscando el articulo A52 pero barra de busqueda no funciona.
    
    it('Búsqueda del equipo A52', () => {
        cy.get('.pnt-js-boton-busqueda > .icon-search').click();
        cy.get('.pnt-input-busqueda').type('A52');
    }) 
    
})