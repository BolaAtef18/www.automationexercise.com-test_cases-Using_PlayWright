import { test, expect, APIResponse } from '@playwright/test';
import { getUserDetailByEmailAPI } from '../../pages/API pages/getUserDetailByEmailAPI';
import { CreateAccountAPI } from '../../pages/API pages/createAccountAPI';


test.describe('API 14: GET user account detail by email', () => {

  test('should return 200 User Detail', async ({ request }) => {


    const api = new getUserDetailByEmailAPI(request);
    const email = `tester256@tester.com`

    

    const response:APIResponse = await api.GetUserDetailByEmail(email);

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(200);
    expect(body.user.email).toBe("tester256@tester.com");



    console.log("API 14: GET user account detail by email Done Successfully");

  });

});