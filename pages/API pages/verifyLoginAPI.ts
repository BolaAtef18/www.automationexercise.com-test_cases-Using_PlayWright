import { APIRequestContext, APIResponse } from '@playwright/test';

export class VerifyLoginAPI {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async POSTVerifyLogin(email:string,password:string): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseUrl}/verifyLogin`,{
        form:{email, password},
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
    }}
    );
    return response;
  }

   async POSTVerifyLoginWithoutEmail(password:string): Promise<APIResponse> {
    const response = await this.request.post(`${this.baseUrl}/verifyLogin`,{
        form:{password},
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
    }}
    );
    return response;
  }

     async DeleteTOVerifyLogin(): Promise<APIResponse> {
    const response = await this.request.delete(`${this.baseUrl}/verifyLogin`,{
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
    }}
    );
    return response;
  }


}