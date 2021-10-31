const BlueOpalPage = require('../pageobjects/blueopal.page');

describe('Blue Opal Design landing page', () => {
    it('should open and display the page', () => {
    	// use the extended class to open the page and return a page object with methods
        BlueOpalPage.open();
    });
    it('should click the header text on the page', () => {
        // use a method from the extended class to interact with an element
        BlueOpalPage.clickMe();
    });
    it('should verify the header on the page', () => {
        // use a browser method to interact with the page
        expect(browser).toHaveTitle('Blue Opal');
    });
});
