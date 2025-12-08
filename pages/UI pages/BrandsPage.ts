import { expect, Locator, Page } from '@playwright/test';

export class BrandsPage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }

    private BrandPolo = '//section/div/div[2]/div[2]/div/h2';
    private BrandH_MButton = '//section/div/div[2]/div[1]/div[1]/div[2]/div/ul/li[2]/a';
    private BrandH_MProducts = '//section/div/div[2]/div[2]/div/h2';



    async verifyBrandPoloisVisiable(){
        await expect(this.page.locator(this.BrandPolo)).toBeVisible();
    }

    async pressonH_MBrand(){
        await this.page.click(this.BrandH_MButton);
    }

    async verifyBrandH_MisVisiable(){
        await expect(this.page.locator(this.BrandH_MProducts)).toBeVisible();
    }
 
  

}