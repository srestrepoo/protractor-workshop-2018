import { browser , $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private productList: ElementArrayFinder;

  constructor () {
    this.productList = $$('.product_list');
  }
  private findByProduct(productName: string): ElementFinder {
    return this.productList
      .filter((item: ElementFinder) =>
        item
          .$('.product-name')
          .getText()
          .then((text: string) => text.includes(productName)))
      .first();
  }
  public async selectProduct(productName: string): Promise<void> {
    const card = this.findByProduct(productName);

    await browser.actions().mouseMove(card.$('img')).perform();
    await card.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
