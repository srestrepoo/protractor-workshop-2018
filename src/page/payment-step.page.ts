import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async proceed(): Promise<void> {
    await this.proceedButton.click();
  }
}
