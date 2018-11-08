import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private passwd: ElementFinder;
  private submitLogin: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.passwd = $('#passwd');
    this.submitLogin = $('#SubmitLogin > span');
  }

  public async login(): Promise<void> {
    this.email.sendKeys('aperdomobo@gmail.com');
    this.passwd.sendKeys('WorkshopProtractor');
    await this.submitLogin.click();
  }
}
