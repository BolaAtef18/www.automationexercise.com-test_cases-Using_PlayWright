import { test, expect } from '@playwright/test';
import { ProductsListAPI } from '../../pages/API pages/productsListAPI';

test.describe('API 2: POST To All Products List', () => {

  test('POST All Products - should return 405 ', async ({ request }) => {

    const api = new ProductsListAPI(request);

    const response = await api.postAllProducts();
    const body = await response.json();

    //expect(response.status()).toBe(405);
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe("This request method is not supported.");
    console.log("API 2: POST To All Products List Done Successfully");

  });

});
