const Page = require('./page');

/**
 * sub page containing specific selectors and methods for that page
 */
class BlueOpalPage extends Page {
/*
    // define selectors using getter methods
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    // a method to encapsule automation code to interact with the page
    // e.g. to login using username and password
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }
*/

    // define selectors using getter methods
    get headerText () { return $('//*[@id="top-navigation-bar"]/ul/li[1]/a') }

    // define a method to interact with an element
    clickMe() {
        this.headerText.click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
     // 8/5: Added a parameter for URL in the class 'page.js'
    open () {
        return super.open('http://www.blueopal.com/','about.html');
    }
}

module.exports = new BlueOpalPage();
