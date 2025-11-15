import { test, expect } from '@playwright/test';
import { BrandsListAPI } from '../../pages/API pages/brandsListAPI';

test.describe('API 4: PUT To All Brands List', () => {

  test('Put All Brands List - should return 405 ', async ({ request }) => {

    const api = new BrandsListAPI(request);

    const response = await api.putAllBrandsList();
    const body = await response.json();
    console.log(body)
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe("This request method is not supported.");
    console.log("API 4: PUT To All Brands List Done Successfully");

  });

});
