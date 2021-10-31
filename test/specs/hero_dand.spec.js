const DandDPage = require('../pageobjects/hero_dand.page');

describe('herokuapp - Drag and Drop landing page', () => {
    it('should open and display the page', () => {
    	// use the extended class to open the page and return a page object with methods
        DandDPage.open();
    });

    it('should verify the title of a herokuapp page', () => {
        // use a browser method to interact with the page
        expect(browser).toHaveTitle('The Internet');
    });

    it('should click the header text on the page', () => {
        // use a method from the extended class to interact with an element
        DandDPage.clickHeader();
    });
    it('should drag box A to box B using the WDIO built-in method', () => {
        DandDPage.dragAtoB();
    });
    it('should click the header text on the page once more', () => {
        // use a method from the extended class to interact with an element
        DandDPage.clickHeader();
    });



});
