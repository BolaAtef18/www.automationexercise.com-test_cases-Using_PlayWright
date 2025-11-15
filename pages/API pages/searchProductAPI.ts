import { APIRequestContext, APIResponse } from '@playwright/test';

export class SearchProductAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async POSTSearchProduct(productName: string): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseUrl}/searchProduct`,
        {form: {search_product:productName },
    headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
    }}
    );
    return response;
  }

   // API 6: بدون باراميتر
  async POSTSearchProductWithoutParam(): Promise<APIResponse> {
    const response= await this.request.post(`${this.baseUrl}/searchProduct`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response;
  }
}