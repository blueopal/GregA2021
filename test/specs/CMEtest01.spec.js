// server URL: https://jlpv-cmeapp01.fmbi.org/CCS_FMB/
//  describe: the Test Case
//        it: the Test Step
//
const CMEloginPage = require('../pageobjects/CMElogin.page');
const CMElandingPage = require('../pageobjects/CMElanding.page');
//
describe('CME Navigation: Login page ', () => {
    it('Open the CME login page. ', () => {
        CMEloginPage.open();
	});

    it('Verify that the CME login page has inputs for Username and Password. ', () => {
        expect(CMEloginPage.labelUsername).toHaveTextContaining('Username');   
        expect(CMEloginPage.labelPassword).toHaveTextContaining('Password');    
    });

    it('Attempt Login to the CME application using valid credentials (positive test). ', () => {
        // use a method from the extended class to interact with an element
        CMEloginPage.login('gannen', 'password');
    });

    it('Verify that the expected CME landing page displayed. ', () => {
        // use a browser method to interact with the page
        //expect(CMEloginPage.labelUsername).toHaveTextContaining('Username');   
        //expect(CMEloginPage.labelPassword).toHaveTextContaining('Password');    
    });

});

describe('CME Navigation: Landing page ', () => {
    it('Select a Filter on the landing page', () => {
        CMElandingPage.selectFilter('User');
	});

	it('Select a Value for the filter on the landing page', () => {
        CMElandingPage.selectValue('Kandru, Bhargavi');
	});

});

