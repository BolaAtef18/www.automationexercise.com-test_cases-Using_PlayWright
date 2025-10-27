import { test, expect, APIResponse } from '@playwright/test';
import { CreateAccountAPI } from '../../pages/API pages/createAccountAPI';
import { UpdateUserAccountAPI } from '../../pages/API pages/updateAccountAPI';


test.describe('API 13: PUT METHOD To Update User Account', () => {

  test('should return 200 Account deleted!', async ({ request }) => {

    //const random = Date.now();

    const Updateapi = new UpdateUserAccountAPI(request);
    const Createapi = new CreateAccountAPI(request);
    const name= 'Bola Atef'
    const email = `tester256@tester.com`
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

    const Updatename= 'Bola Atef123'


    const createresponse:APIResponse = await Createapi.postToCreate_Register(name,email,password,
        title,birth_day,birth_month,birth_year,firstname,lastname,
        company,address1,address2,country,zipcode,state,city,mobile_number);

    const updateresponse:APIResponse = await Updateapi.UpdateUserAccount(Updatename,email,password,
        title,birth_day,birth_month,birth_year,firstname,lastname,
        company,address1,address2,country,zipcode,state,city,mobile_number);

    //parseing of reponse to json
    const body = await updateresponse.json();

    //print of body
    console.log(body);
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe("User updated!");



    console.log("API 13: PUT METHOD To Update User Account Done Successfully");

  });

});