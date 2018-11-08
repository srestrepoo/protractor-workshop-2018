import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private confirmAddedButton: ElementFinder;

  constructor () {
    this.confirmAddedButton = $('[style*="display: block;"] .button-container > a');
  }

  public async confirmAdded(): Promise<void> {
    await this.confirmAddedButton.click();
  }
}
