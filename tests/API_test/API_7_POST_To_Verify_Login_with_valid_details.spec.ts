import { test, expect, APIResponse } from '@playwright/test';
import { VerifyLoginAPI } from '../../pages/API pages/verifyLoginAPI';

test.describe('API 7: POST To Verify Login with valid details', () => {

  test('should return 200', async ({ request }) => {

    const api = new VerifyLoginAPI(request);
    const email = 'login@logout.com';
    const password = '123456';

    const response:APIResponse = await api.POSTVerifyLogin(email,password);

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe("User exists!");



    console.log("API 7: POST To Verify Login with valid details Done Successfully");

  });

});