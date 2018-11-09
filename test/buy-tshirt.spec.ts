import { $, browser, ExpectedConditions } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage}
  from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await browser.wait(
      ExpectedConditions.elementToBeClickable($('#block_top_menu > ul > li:nth-child(3) > a')),
      3000);
    await menuContentPage.goToTShirtMenu();

    // await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click();
    await productListPage.addToCar();

    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        $('[style*="display: block;"] .button-container > a')
      ),
      3000);
    await productAddedModalPage.confirmAdded();

    await browser.wait(
      ExpectedConditions.elementToBeClickable($('.cart_navigation span')),
      3000);
    await summaryStepPage.proceed();

    // await $('#email').sendKeys('aperdomobo@gmail.com');
    // await $('#passwd').sendKeys('WorkshopProtractor');
    // await $('#SubmitLogin > span').click();
    await signInStepPage.login();

    await browser.wait(
      ExpectedConditions.elementToBeClickable($('#center_column > form > p > button > span')),
      3000);
    await addressStepPage.proceed();

    // await $('#cgv').click();
    await shippingStepPage.confirmTerms();

    // await $('#form > p > button > span').click();
    await shippingStepPage.proceed();

    // await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await paymentStepPage.proceed();

    // await $('#cart_navigation > button > span').click();
    await bankPaymentPage.proceed();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
