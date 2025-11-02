import { Locator, Page } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly fileInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.locator('//*[@id="contact-us-form"]/div[5]/input');

  }

  private getintouch= '//*[@id="contact-page"]/div[2]/div[1]/div/h2';
  private Name ='//*[@id="contact-us-form"]/div[1]/input';
  private Email ='//*[@id="contact-us-form"]/div[2]/input';
  private subject ='//*[@id="contact-us-form"]/div[3]/input';
  private message ='//*[@id="message"]';
  private submitbutton ='//*[@id="contact-us-form"]/div[6]/input';
  private successemessage ='//*[@id="contact-page"]/div[2]/div[1]/div/div[2]';
  private homebutton ='//*[@id="form-section"]/a/span';



   async isgetintouchVisiable() {
    await this.page.waitForSelector(this.getintouch); 
  } 

  async enterdata(name:string,email:string,subject:string,message:string){
    await this.page.fill(this.Name,name);
    await this.page.fill(this.Email,email);
    await this.page.fill(this.subject,subject);
    await this.page.fill(this.message,message);
    await this.fileInput.setInputFiles('uploads\\rubber.jpg');
    await this.page.click(this.submitbutton);
  }

  async is_Successe_Message_Visiable(){
    await this.page.waitForSelector(this.successemessage);
  }

  async pressonhomebutton(){
    await this.page.click(this.homebutton);
  }

 
}