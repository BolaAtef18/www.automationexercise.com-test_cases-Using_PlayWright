import { test, expect, APIResponse } from '@playwright/test';
import { SearchProductAPI } from '../../pages/API pages/searchProductAPI';

test.describe('API 5: POST To Search Product', () => {

  test('should search product successfully', async ({ request }) => {

    const api = new SearchProductAPI(request);
    const ProductName ='tshirt';

    const response:APIResponse = await api.POSTSearchProduct(ProductName);

    //print status of response 
   console.log('Status:', response.status());

    //assert of status equal 200
    expect(response.status()).toBe(200);

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);

    expect(body).toHaveProperty('responseCode', 200);
    expect(body).toHaveProperty('products');
    expect(Array.isArray(body.products)).toBeTruthy();
    console.log("API 5: POST To Search Product Done Successfully");

  });

});