import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private terms: ElementFinder;
  private proceedButton: ElementFinder;

  constructor () {
    this.terms = $('#cgv');
    this.proceedButton = $('#form > p > button > span');
  }

  public async confirmTerms(): Promise<void> {
    await this.terms.click();
  }

  public async proceed(): Promise<void> {
    await this.proceedButton.click();
  }
}
