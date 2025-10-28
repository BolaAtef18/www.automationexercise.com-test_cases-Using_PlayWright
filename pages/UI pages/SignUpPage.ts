import { Page } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

   public STAD(): string {
    const address: string = "123 Test Street";
    return address;
  }

  private NewUserSignUp ='//*[@id="form"]/div/div/div[3]/div/h2';

  private titleMr = '[id="id_gender1"]';
  private password = '[data-qa="password"]';
  private day = '[data-qa="days"]';
  private month = '[data-qa="months"]';
  private year = '[data-qa="years"]';
  private newsletter = '[name="newsletter"]';
  private optin = '[name="optin"]';
  private firstName = '[data-qa="first_name"]';
  private lastName = '[data-qa="last_name"]';
  private company = '[data-qa="company"]';
  private address = '[data-qa="address"]';
  private country = '[data-qa="country"]';
  private state = '[data-qa="state"]';
  private city = '[data-qa="city"]';
  private zipcode = '[data-qa="zipcode"]';
  private mobile = '[data-qa="mobile_number"]';

  private createAccountButton= '//*[@id="form"]/div/div/div/div/form/button';


  async fillAccountInfo(){
    await this.page.click(this.titleMr);
    await this.page.fill(this.password,'123456');
    await this.page.selectOption(this.day,'1');
    await this.page.selectOption(this.month,'January');
    await this.page.selectOption(this.year,'2000');
    await this.page.click(this.newsletter,);
    await this.page.click(this.optin);
    await this.page.fill(this.firstName,'bola');
    await this.page.fill(this.lastName,'Atef');
    await this.page.fill(this.company,'BA Company');
    await this.page.fill(this.address,this.STAD());
    await this.page.selectOption(this.country,'India');
    await this.page.fill(this.state,'Test State');
    await this.page.fill(this.city,'Test City');
    await this.page.fill(this.zipcode,'123');
    await this.page.fill(this.mobile,'0123456789');
  }
  async clickCreateAccount(){
    await this.page.click(this.createAccountButton);
  }

    async isAccountCreatedVisible() {
    await this.page.waitForSelector(this.NewUserSignUp);
  }
}
