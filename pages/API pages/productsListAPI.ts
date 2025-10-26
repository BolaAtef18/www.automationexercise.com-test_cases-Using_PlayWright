import { APIRequestContext, APIResponse } from '@playwright/test';

export class ProductsListAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // 🟢 GET: Get All Products
  async getAllProducts(): Promise<APIResponse> {
    const response = await this.request.get(`${this.baseUrl}/productsList`);
    return response;
  }

  // 🔴 POST: Attempt to send to productsList (expected 405)
  async postAllProducts(): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseUrl}/productsList`);
    return response;
  }
}
