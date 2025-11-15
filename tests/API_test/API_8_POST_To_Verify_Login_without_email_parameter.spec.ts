import { test, expect, APIResponse } from '@playwright/test';
import { VerifyLoginAPI } from '../../pages/API pages/verifyLoginAPI';

test.describe('API 8: POST To Verify Login without email parameter', () => {

  test('should return 400 Bad Request', async ({ request }) => {

    const api = new VerifyLoginAPI(request);
    const password = '123456';

    const response:APIResponse = await api.POSTVerifyLoginWithoutEmail(password);

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe("Bad request, email or password parameter is missing in POST request.");



    console.log("API 7: POST To Verify Login with valid details Done Successfully");

  });

});