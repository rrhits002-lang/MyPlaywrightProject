
//Dot yes what is API testing anyone tell me what is API testing

//API testing: Validate the backend functionality using the API calls (request and response)
/*
request url--
response body--
response
response code as well

*/

import {test, expect} from '@playwright/test';

test('login validation using API', async ({request}) =>{ 

const loginPayload={
   userEmail: 'rrhits002@gmail.com',
   userPassword: 'Rohit@2026'    
}

const LoginResponse = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    //pass the login details in the body of the request
    data:loginPayload
})

    console.log(LoginResponse);

   expect(LoginResponse.status()).toBe(200)

   const responseBody = await LoginResponse.json()

  console.log(responseBody);



})