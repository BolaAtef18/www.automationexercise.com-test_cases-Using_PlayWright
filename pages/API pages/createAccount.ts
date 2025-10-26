import { APIRequestContext, APIResponse } from '@playwright/test';

export class BrandsListAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // 🟢 GET: Get All Products
  async postToCreate_Register(): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseUrl}/createAccount`);
    return response;
  }

}
