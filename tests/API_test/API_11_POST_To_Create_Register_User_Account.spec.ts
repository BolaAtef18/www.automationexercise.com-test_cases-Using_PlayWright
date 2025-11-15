import { test, expect, APIResponse } from '@playwright/test';
import { CreateAccountAPI } from '../../pages/API pages/createAccountAPI';

test.describe('API 11: POST To Create/Register User Account', () => {

  test('should return 201 User created!', async ({ request }) => {

    const random = Date.now();

    const api = new CreateAccountAPI(request);
    const name= 'Bola Atef'
    const email = `tester${random}@tester.com`
    const password = '123456000'
    const title = "Mr"
    const birth_day= "10"
    const birth_month= "May"
    const birth_year= "1990"
    const firstname= "Bola"
    const lastname= "Atef"
    const company= "ABC Corp"
    const address1= "123 Street"
    const address2= "Apartment 4B"
    const country= "Canada"
    const zipcode= "12345"
    const state= "Ontario"
    const city= "Toronto"
    const mobile_number= "+11234567890"


    const response:APIResponse = await api.postToCreate_Register(name,email,password,
        title,birth_day,birth_month,birth_year,firstname,lastname,
        company,address1,address2,country,zipcode,state,city,mobile_number);

    //parseing of reponse to json
    const body = await response.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(201);
    expect(body.message).toBe("User created!");



    console.log("API 11: POST To Create/Register User Account Done Successfully");

  });

});