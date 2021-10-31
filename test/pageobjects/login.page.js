const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
     // GregA: this opens the 'sub-page' "login" (full URL is https://the-internet.herokuapp.com/login)
     // which is appended to the base URL (https://the-internet.herokuapp.com/) in page.js as the variable '${path}'.
     // Note: on the herokuapp example page, the link is called 'Form Authentication'
     //     8/5: Added a parameter for URL in the class 'page.js'
    open () {
        return super.open('https://the-internet.herokuapp.com/','login');
    }
}

module.exports = new LoginPage();
