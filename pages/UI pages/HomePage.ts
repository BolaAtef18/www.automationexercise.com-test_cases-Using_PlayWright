import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private signupLoginLink = '//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a';
  private HomePageLogo ='//*[@id="header"]/div/div/div/div[1]/div/a/img';
  private Delete_Button ='//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[5]/a';
  private ContactUs ='//*[@id="header"]/div/div/div/div[2]/div/ul/li[8]/a';
  private TestCasebutton ='//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]';
  private Productsbutton ='//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a';
  private Subscription ='//*[@id="footer"]/div[1]/div/div/div[2]/div/h2';
  private susbscribe_email ='//*[@id="susbscribe_email"]';
  private subscribeButton ='//*[@id="subscribe"]';
  private successMessage ='//*[@id="success-subscribe"]/div';

  private cartbutton='//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a';
  private productbutton='//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a';
  private viewProduct = '//a[@href="/product_details/1"]';
  private hoveronproduct = '//div/div[2]/div/div/div[2][@class="product-overlay"]';
  private clickonaddtocart = (index:number)=>this.page.locator(`//div/div[2]/div/div/div[2]/div/a[@data-product-id="${index}"]`);
  private Category ='//section[2]/div[1]/div[1]/div[1]/div/h2';
  private WomanCategory = '//*[@id="accordian"]/div[1]/div[1]/h4/a';
  private dress = '//*[@id="Women"]/div/ul/li[1]/a';
 
  async clickSignupLogin(){
    await this.page.click(this.signupLoginLink);
  }

  async verifyHomePageVisible() {
    await this.page.waitForSelector(this.HomePageLogo); 
  }

  async delete_button(){
    await this.page.click(this.Delete_Button);
  }

  async pressoncontactusbutton(){
    await this.page.click(this.ContactUs);
  }

  async pressontestcasebutton(){
    await this.page.click(this.TestCasebutton);
  }

  async pressonproductbutton(){
    await this.page.click(this.Productsbutton);
  }

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async VerifySUBSCRIPTIONisVisible(){
    await expect(this.page.locator(this.Subscription)).toBeVisible();
  }

  async  Enteremailclickbutton(email:string){
    await this.page.fill(this.susbscribe_email,email);
    await this.page.click(this.subscribeButton);
  }

  async successMessageisVisible(){
    await expect(this.page.locator(this.successMessage)).toBeVisible();
  }

  async pressonCartButton(){
    await this.page.click(this.cartbutton);
  }

  async pressonProductbutton(){
    await this.page.click(this.productbutton);
  }

  async pressonViewProduct(){
    await this.page.click(this.viewProduct);
  }

  async HoveronProduct(index: number) {
  // امسك الـ product الاساسي (parent)
  const product = this.page.locator('.product-image-wrapper').nth(index - 1);

  // Scroll
  await product.scrollIntoViewIfNeeded();

  // Hover على المنتج نفسه
  await product.hover();

  // الزرار اللي بيظهر بعد الـ hover
  const addButton = product.locator('.product-overlay a.add-to-cart');

  // انتظر يظهر
  await addButton.waitFor({ state: 'visible' });

  await this.page.waitForTimeout(500);

  // اضغط عليه
  await addButton.click();
}

async Verifythatcategoriesisvisible(){
  await expect(this.page.locator(this.Category)).toBeVisible();
}

async pressonWomanCategorie(){
  await this.page.click(this.WomanCategory);
}

async pressonDress(){
  await this.page.click(this.dress);
}

}