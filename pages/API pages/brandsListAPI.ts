import { APIRequestContext, APIResponse } from '@playwright/test';

export class BrandsListAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // 🟢 GET: Get All Products
  async getAllBrandsList(): Promise<APIResponse> {
    const response = await this.request.get(`${this.baseUrl}/brandsList`);
    return response;
  }

  async putAllBrandsList(): Promise<APIResponse> {
    const response = await this.request.put(`${this.baseUrl}/brandsList`);
    return response;
  }

}
