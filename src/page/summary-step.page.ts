import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('.cart_navigation span');
  }

  public async proceed(): Promise<void> {
    await this.proceedButton.click();
  }
}
