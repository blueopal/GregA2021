/*This is the CME prod load balancer page
  It can hit any of the 5 app servers		*/
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CMEappLBPage extends Page {
    /**
     * define selectors using getter methods
     */
    // the landing page
    get inputUsername () { return $('#\\32 8 > input[type=text]') }
    get inputPassword () { return $('#\\33 0 > input[type=password]') }
    get dateSystemDate () { return $('#\\33 2 > input[type=text]') }
    get btnSubmit () { return $('#\\33 3 > div > a') }
    get labelUsername () { return $('#\\32 7') }
    get labelPassword () { return $('#\\32 9') }
    // the Bad Login dialog:
    get labelBadLogin () { return $('//div[. = "Bad Login"]') }
    get buttonOK () { return $('//a[. = "OK"]') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    // define a method to interact with an element
    clickOK() {
        this.buttonOK.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
     // GregA: this opens the 'sub-page' "CCS-FMB" (full URL is https://jlpv-cmeapp05.fmbi.org/CCS_FMB)
     // which is appended to the base URL (https://the-internet.herokuapp.com/) in page.js as the variable '${path}'.
     // Note: on the herokuapp example page, the link is called 'Form Authentication'
     // 8/5: Added a parameter for URL in the class 'page.js'
    open () {
        return super.open('https://cme.fmbi.org/','CCS_FMB/');
    }
}

module.exports = new CMEappLBPage();
