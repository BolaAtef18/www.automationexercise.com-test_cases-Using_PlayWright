import { test, expect, APIResponse } from '@playwright/test';
import { VerifyLoginAPI } from '../../pages/API pages/verifyLoginAPI';

test.describe('API 9: DELETE To Verify Login', () => {

  test('should return 405 Bad Request', async ({ request }) => {

    const api = new VerifyLoginAPI(request);
    const password = '123456';

    const response:APIResponse = await api.DeleteTOVerifyLogin();

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe("This request method is not supported.");



    console.log("API 9: DELETE To Verify Login Done Successfully");

  });

});