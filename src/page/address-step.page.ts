import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('#center_column > form > p > button > span');
  }

  public async proceed(): Promise<void> {
    await this.proceedButton.click();
  }
}
