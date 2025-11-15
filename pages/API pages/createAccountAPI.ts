import { APIRequestContext, APIResponse } from '@playwright/test';

export class CreateAccountAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // 🟢 GET: Get All Products
  async postToCreate_Register(name : string, email: string, password: string,
    title: string, birth_day: string, birth_month: string, birth_year: string, firstname: string,
    lastname: string, company: string, address1: string, address2: string, country: string,
    zipcode: string, state: string, city: string, mobile_number: string): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseUrl}/createAccount`,{
      form: {
        name:name,
        email:email,
        password:password,
        title:title,
        birthday:birth_day,
        birthmonth:birth_month,
        birthyear:birth_year,
        firstname:firstname,
        lastname:lastname,
        company:company,
        address1:address1,
        address2:address2,
        country:country,
        zipcode:zipcode,
        state:state,
        city:city,
        mobile_number:mobile_number
      }
    });
    return response;
  }

}
