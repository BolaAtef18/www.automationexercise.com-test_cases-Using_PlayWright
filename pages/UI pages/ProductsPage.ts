import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly ALLProductsTitle: Locator;
  readonly ProductsList:Locator;



  constructor(page: Page) {
    this.page = page;
    this.ALLProductsTitle =page.locator('//h2[text()="All Products"]');
    this.ProductsList = page.locator('//div[@class="features_items"]');

  }

  private viewProducts =(inddex:number)=>`//a[@href="/product_details/${inddex}"]`;

  async verifyALLProductsPageVisible() {
    await expect(this.ALLProductsTitle).toBeVisible();
  }  

  async verifyProductsListVisiable(){
    await expect(this.ProductsList).toBeVisible();
  }

  async pressonviewproductbutton(index: number){
    await this.page.click(this.viewProducts(index));
  }

}