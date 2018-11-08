import { $, browser } from 'protractor';
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
    // await(browser.sleep(10000));
    // await $('#block_top_menu > ul > li:nth-child(3) > a').click();
    await menuContentPage.goToTShirtMenu();
    // await(browser.sleep(3000));
    // await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click();
    await productListPage.addToCar();
    // await(browser.sleep(3000));
    // await $('[style*="display: block;"] .button-container > a').click();
    await productAddedModalPage.confirmAdded();
    // await(browser.sleep(3000));
    // await $('.cart_navigation span').click();
    await summaryStepPage.proceed();
    // await(browser.sleep(3000));

    // await $('#email').sendKeys('aperdomobo@gmail.com');
    // await $('#passwd').sendKeys('WorkshopProtractor');
    // await $('#SubmitLogin > span').click();
    await signInStepPage.login();
    // await(browser.sleep(3000));

    // await $('#center_column > form > p > button > span').click();
    await addressStepPage.proceed();
    // await(browser.sleep(3000));

    // await $('#cgv').click();
    await shippingStepPage.confirmTerms();
    // await(browser.sleep(3000));
    // await $('#form > p > button > span').click();
    await shippingStepPage.proceed();
    // await(browser.sleep(3000));

    // await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await paymentStepPage.proceed();
    // await(browser.sleep(3000));

    // await $('#cart_navigation > button > span').click();
    await bankPaymentPage.proceed();
    // await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
