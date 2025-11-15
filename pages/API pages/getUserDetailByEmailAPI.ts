import { APIRequestContext, APIResponse } from '@playwright/test';

export class getUserDetailByEmailAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async GetUserDetailByEmail(email: string): Promise<APIResponse> {
    const response = await this.request.get(`${this.baseUrl}/getUserDetailByEmail`,
    {
        params:{email}
    }
    );
    return response;
  }
}
