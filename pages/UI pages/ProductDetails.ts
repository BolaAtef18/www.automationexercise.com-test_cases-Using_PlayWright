import { expect, Page } from '@playwright/test';

export class ProductDetails {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private ProductName ='//div[@class="product-information"]/h2';
  private Category ='//div[@class="product-information"]/p[contains(text(),"Category")]';
  private Price ='//div[@class="product-information"]/span/span';
  private Availability ='//section//div[@class="product-information"]/p[2]';
  private condition ='//section//div[@class="product-information"]/p[3]';
  private Brand ='//section//div[@class="product-information"]/p[4]';


  async verifyProductDetailsVisible() {
    await expect(this.page.locator(this.ProductName)).toBeVisible();
    await expect(this.page.locator(this.Category)).toBeVisible();
    await expect(this.page.locator(this.Price)).toBeVisible();
    await expect(this.page.locator(this.Availability)).toBeVisible();
    await expect(this.page.locator(this.condition)).toBeVisible();
    await expect(this.page.locator(this.Brand)).toBeVisible();

    await expect(this.page.locator(this.ProductName)).toHaveText('Blue Top');
    await expect(this.page.locator(this.Category)).toHaveText('Category: Women > Tops');
    await expect(this.page.locator(this.Price)).toHaveText('Rs. 500');
    await expect(this.page.locator(this.Availability)).toHaveText('Availability: In Stock');
    await expect(this.page.locator(this.condition)).toHaveText('Condition: New');
    await expect(this.page.locator(this.Brand)).toHaveText('Brand: Polo');


  }
 



}