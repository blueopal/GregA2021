const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BadLoginDialog extends Page {
    /**
     * define selectors using getter methods
     */
    get labelBadLogin () { return $('#53') }
    get buttonOK () { return $('#59') }

    // define a method to interact with an element
    clickOK() {
        this.buttonOK.click();
    }
}

module.exports = new BadLoginDialog();
