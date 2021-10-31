const Page = require('./page');

/**
 * sub page containing specific selectors and methods for that page
 */
class DandDPage extends Page {

    //define selectors using get
    get headerText () { return $('//*[@id="content"]/div/h3') };
    get boxA () {return $('//*[@id="column-a"]') };
    get boxB () {return $('//*[@id="column-b"]') };

    //define methods for page objects
    // click the header
    clickHeader() {
        this.headerText.click();
    }
    // drag and drop from A to B
    dragAtoB() {
        let target1 = this.boxB;
        // use the WDIO built-in method
        this.boxA.dragAndDrop(target1);
    }
    // open the browser to base URL + section
    open () {
        return super.open('https://the-internet.herokuapp.com/','drag_and_drop');
    }
}

module.exports = new DandDPage();
