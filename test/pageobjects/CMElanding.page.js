const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CMElandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    // the landing page
    get filterArrowDown () { return $('//*[@id="56"]/div[2]/div') }
    get filterDropBox () { return $('//*[@id="56"]') }


    get filterUser () { return $('#\\35 6 > input[type=text]') }
    get selectValue () { return $('#\\35 9 > input[type=text]') }
    /**
     * a method to encapsule automation code to interact with the page
    */
    selectFilter (filterName){
        this.filterArrowDown.click();
        browser.pause(10000);    
        //this.filterDropBox.selectByAttribute('title', filterName);
        //this.filterDropBox.selectByVisibleText(filterName);
        //this.filterUser.selectByVisibleText(filterName);
        this.filterUser.selectByIndex(1);
    }
    selectValue (valueName){
        this.selectValue.selectByVisibleText(valueName);
    }
}
module.exports = new CMElandingPage();
