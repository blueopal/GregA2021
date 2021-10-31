// server URL: https://jlpv-cmeapp01.fmbi.org/CCS_FMB/
//  describe: the Test Case
//        it: the Test Step
//
const CMEapp01Page = require('../pageobjects/CMEapp01.page');
describe('HEALTH CHECK: CME jlpv-cmeapp01 ', () => {
    it('Open the CME login page. ', () => {
        CMEapp01Page.open();
	});

    it('Verify that the CME login page has inputs for Username and Password. ', () => {
        expect(CMEapp01Page.labelUsername).toHaveTextContaining('Username');   
        expect(CMEapp01Page.labelPassword).toHaveTextContaining('Password');    
    });

    it('Attempt Login to the CME application using invalid credentials (negative test). ', () => {
        // use a method from the extended class to interact with an element
        CMEapp01Page.login('AutomationFail', 'Sup3rS3cr3tP@ssword!');
    });

    it('Verify the Bad Login dialog exists and click the OK button. ', () => {
        // use a browser method to interact with the page
        expect(CMEapp01Page.labelBadLogin).toBeExisting();
        CMEapp01Page.clickOK();
    });

    it('Verify that the login page is redisplayed. ', () => {
        // use a browser method to interact with the page
        expect(CMEapp01Page.labelUsername).toHaveTextContaining('Username');   
        expect(CMEapp01Page.labelPassword).toHaveTextContaining('Password');    
    });

});
