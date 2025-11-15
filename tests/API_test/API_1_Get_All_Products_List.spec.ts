import { test, expect } from '@playwright/test';
import { ProductsListAPI } from '../../pages/API pages/productsListAPI';

test.describe('Products API Tests', () => {

  test('GET All Products - should return 200 and contain products list', async ({ request }) => {
    const api = new ProductsListAPI(request);

    const response = await api.getAllProducts();
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('products');
    expect(Array.isArray(body.products)).toBeTruthy();
  });

    console.log("API 1: Get All Products List Done Successfully");

});
