import { test, expect } from '@playwright/test';
import { BrandsListAPI } from '../../pages/API pages/brandsListAPI';

test.describe('API 3: Get All Brands List', () => {

  test('GET All Brands List - should return 200 ', async ({ request }) => {

    const api = new BrandsListAPI(request);

    const response = await api.getAllBrandsList();
    expect(response.status()).toBe(200);
    console.log("API 3: Get All Brands List Done Successfully");

  });

});
