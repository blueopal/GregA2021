const Page = require('./page');

// Start of "getCoordsForElement" function
var getCoordsForElement = function (elementId) {
  rect =browser.getElementRect(elementId);
  X = parseInt(rect.x + (rect.width / 2), 10);
  Y = parseInt(rect.y + (rect.height / 2), 10);
  return [X, Y];
};

/**
 * page specific selectors and methods
 */
class DandDPage extends Page {
    //define selectors using get
    get headerText () { return $('//*[@id="content"]/div/h3') };
    get boxA () { return $('//*[@id="column-a"]') };
    get boxAHeader () { return $('//*[@id="column-a"]/header') };
    get boxB () { return $('//*[@id="column-b"]') };
    get boxBHeader () { return $('//*[@id="column-b"]/header') };

    //define methods for page objects
    // click the header
    clickHeader() {
        this.headerText.click();
    }

    // drag and drop from A to B
    dragAtoB() {
    // use the WDIO built-in method
        this.boxAHeader.dragAndDrop(this.boxBHeader);
        this.boxAHeader.click(); // drops boxA ??? Nope!
    // use a non-WDIO method
/*        const ACTION_BUTTON = 0;
        var [sourceX, sourceY] = getCoordsForElement(this.boxAHeader);
        var [targetX, targetY] = getCoordsForElement(this.boxBHeader);
        var diffX=sourceX-targetX;
        var diffY=sourceY-targetY;

        browser.performActions([{
              type: 'pointer',
              id: 'finger1',
              parameters: { pointerType: 'mouse' },
              actions: [
                  { type: 'pointerMove', duration: 0, x: sourceX, y: sourceY },
                  { type: 'pointerDown', button: constants.ACTION_BUTTON },
                  { type: 'pause', duration: 10 }, // emulate human pause
                  { type: 'pointerMove', duration, origin: 'pointer', x: diffX, y: diffY }
              ]
        }]);
*/    }

    // open the browser to base URL + section
    open () {
        return super.open('https://the-internet.herokuapp.com/','drag_and_drop');
    }
}

module.exports = new DandDPage();
