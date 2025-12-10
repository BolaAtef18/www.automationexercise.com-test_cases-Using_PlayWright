import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly ALLProductsTitle: Locator;
  readonly ProductsList:Locator;
  readonly SearchResult:Locator;
  readonly productCards:Locator;



  constructor(page: Page) {
    this.page = page;
    this.ALLProductsTitle =page.locator('//h2[text()="All Products"]');
    this.ProductsList = page.locator('//div[@class="features_items"]');
    this.SearchResult = page.locator('//div[2]/div/div/div/p');
    this.productCards = page.locator('//div[@class="productinfo text-center"]');
  }


  private viewProducts =(index:number)=>`//a[@href="/product_details/${index}"]`;
  private searchtext = '//*[@id="search_product"]';
  private hoveronproduct = (index:number)=>this.page.locator(`//div/div[2]/div/div/div[2]/div/a[@data-product-id=${index}]`);
  private viewcart = '//p/a[@href="/view_cart"]';
  private Brands ='//section[2]/div[1]/div/div[1]/div[1]/div[2]/h2';
  private PoloBrands = '//section[2]/div[1]/div/div[1]/div[1]/div[2]/div/ul/li[1]/a';
  private SearchFiled = '//*[@id="search_product"]';
  private Searchbutton = '//*[@id="submit_search"]/i';

  async verifyALLProductsPageVisible() {
    await expect(this.ALLProductsTitle).toBeVisible();
  }  

  async verifyProductsListVisiable(){
    await expect(this.ProductsList).toBeVisible();
  }

  async pressonviewproductbutton(index: number){
    await this.page.click(this.viewProducts(index));
  }

  async searchproduct(search_Product: string){
    await this.page.fill(this.searchtext, search_Product);
    await this.page.click(this.Searchbutton)
  }

  async VerifySEARCHEDPRODUCTSisvisible(){
    await expect(this.SearchResult).toBeVisible();
    await expect(this.SearchResult).toHaveText('Blue Top');
  }

  async verifyALLSearchedProductsVisible(){
    const products = this.productCards;
    const count = await products.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
  await expect(products.nth(i)).toBeVisible(); // ← بيتأكد إن كل منتج ظاهر على الصفحة
}
  }

  async HoveronProduct(index:number){
    await this.hoveronproduct(index).hover({ force: true });
    await this.hoveronproduct(index).click();
  }

  async pressonViewCart(){
    await this.page.click(this.viewcart);
  }

  async  VerifyBrandsisVisible(){
    await expect(this.page.locator(this.Brands)).toBeVisible();
  }

  async pressonPoloBrand(){
    await this.page.click(this.PoloBrands);
  }

 /* async searchproduct(){
    await this.page.fill(searc)
  }*/

}