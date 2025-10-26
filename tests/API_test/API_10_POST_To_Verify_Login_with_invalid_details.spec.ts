import { test, expect, APIResponse } from '@playwright/test';
import { VerifyLoginAPI } from '../../pages/API pages/verifyLoginAPI';

test.describe('API 10: POST To Verify Login with invalid details', () => {

  test('should return 400 Bad Request', async ({ request }) => {

    const api = new VerifyLoginAPI(request);
    const email = 'tester@tester.com'
    const password = '123456000';

    const response:APIResponse = await api.POSTVerifyLogin(email,password);

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(404);
    expect(body.message).toBe("User not found!");



    console.log("API 10: POST To Verify Login with invalid details Done Successfully");

  });

});