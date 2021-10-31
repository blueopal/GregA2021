/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path is the path of the sub page (e.g. /path/to/page.html)
    * 	8/5: Added a parameter for URL as well
    */
    open (target_url,path) {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
        return browser.url(`${target_url}${path}`)
    }
}
