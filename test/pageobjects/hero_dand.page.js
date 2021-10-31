const Page = require('./page');

/**
 * sub page containing specific selectors and methods for that page
 */
class DandDPage extends Page {

    // define selectors using getter methods
    get headerText () { return $('//*[@id="content"]/div/h3') };
    get boxA () {return $('//*[@id="column-a"]') };
    get boxB () {return $('//*[@id="column-b"]') };

    // define a method to interact with each element
    // click the header
    clickHeader() {
        this.headerText.click();
    }
    // drag and drop from A to B using the WDIO method
    dragAtoB() {
        let target = this.boxB;
        this.boxA.dragAndDrop(target)
    }
     // Added a parameter for URL in the class 'page.js'
    open () {
        return super.open('https://the-internet.herokuapp.com/','drag_and_drop');
    }
}

module.exports = new DandDPage();
