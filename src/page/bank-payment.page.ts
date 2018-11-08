import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('#cart_navigation > button > span');
  }

  public async proceed(): Promise<void> {
    await this.proceedButton.click();
  }
}
