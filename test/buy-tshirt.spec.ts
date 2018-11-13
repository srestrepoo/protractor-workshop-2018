import { $, browser, ExpectedConditions } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage}
  from '../src/page';

describe('open website', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });
  describe('Buy t-shirt', async () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const productListPage: ProductListPage = new ProductListPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();
      await browser.wait(
        ExpectedConditions.elementToBeClickable(
          $('#block_top_menu > ul > li:nth-child(3) > a')),
        5000);
      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await browser.wait(
        ExpectedConditions.elementToBeClickable(
          $('[style*="display: block;"] .button-container > a')),
        5000);
      await productAddedModalPage.confirmAdded();
      await browser.wait(
        ExpectedConditions.elementToBeClickable(
          $('.cart_navigation span')),
        5000);
      await summaryStepPage.proceed();
    });
    describe('Login', async () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.login();
      });
      describe('Address selection', async () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();
          await browser.wait(
            ExpectedConditions.elementToBeClickable(
             $('#center_column > form > p > button > span')),
            5000);
          await addressStepPage.proceed();
          await shippingStepPage.confirmTerms();
          await shippingStepPage.proceed();
        });
        describe('Bank payment', async () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            await paymentStepPage.proceed();
            await bankPaymentPage.proceed();
          });
          it('then should be bought a t-shirt', async () => {
            await expect($('#center_column > div > p > strong').getText())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
