import { APIRequestContext, APIResponse } from '@playwright/test';

export class DeleteAccountAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async DeleteUserAccount(email:string,password:string): Promise<APIResponse> {
    const response = await this.request.delete(`${this.baseUrl}/deleteAccount`,{
    form:{
        email:email,
        password:password
    }}
    );
    return response;
  }
}
