import { test, expect, APIResponse } from '@playwright/test';
import { SearchProductAPI } from '../../pages/API pages/searchProductAPI';

test.describe('API 6: POST To Search Product without search_product parameter', () => {

  test('should return 400 Bad Request', async ({ request }) => {

    const api = new SearchProductAPI(request);

    const response:APIResponse = await api.POSTSearchProductWithoutParam();

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe("Bad request, search_product parameter is missing in POST request.");



    console.log("API 6: POST To Search Product without search_product parameter Done Successfully");

  });

});