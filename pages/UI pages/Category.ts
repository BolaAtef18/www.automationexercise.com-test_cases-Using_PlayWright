import { expect, Locator, Page } from '@playwright/test';

export class Category {
    readonly page: Page;
    constructor(page: Page) {
    this.page = page;
    }
    private WomenDressProducts = '//section/div/div[2]/div[2]/div/h2';
    private MenCategory = '//*[@id="accordian"]/div[2]/div[1]/h4/a';
    private MenTshirts = '//*[@id="Men"]/div/ul/li[1]/a';
    private MenTshirtsProducts = '//div[2]/div[2]/div/h2'


    async Verifythatcategorypageisvisible(){
        await expect(this.page.locator(this.WomenDressProducts)).toBeVisible();
    }

    async pressonMenCategory(){
        await this.page.click(this.MenCategory);
    }

    async pressonMenTshirts(){
        await this.page.click(this.MenTshirts);
    }

    async VerifythatcategoryMenisvisible(){
        await expect(this.page.locator(this.MenTshirtsProducts)).toBeVisible();
    }


}