import { Page } from '@playwright/test';

export class TestCasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private testCaseTitle ='//*[@id="form"]/div/div[1]/div/h2/b';

  async verifyTestCasePageVisible() {
    await this.page.waitForSelector(this.testCaseTitle); 
  } 


}
