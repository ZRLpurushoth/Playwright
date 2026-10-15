import { test, expect, firefox } from "@playwright/test";
import { request } from "node:http";
let id;
test.skip("GetAllUsers", async ({ request }) => {
  const response = await request.get(
    "https://api.escuelajs.co/api/v1/categories",
  );
  console.log(await response.status());
  const body = await response.json();
  await expect(response.statusText()).toBe("OK");
  console.log(await response.statusText());
  console.log(body);
});

test.skip("GetSingleUser", async ({ request }) => {
  const response = await request.get(
    "https://api.escuelajs.co/api/v1/categories/6",
  );
  const body = await response.json();
  console.log(body);
  await expect(response.status()).toBe(200);
  console.log(await response.statusText());
});

test("PostUser", async ({ request }) => {
  const response = await request.post(
    "https://api.escuelajs.co/api/v1/users/",
    {
      data: {
        id: 49,
        email: "Purushothaman@gmail.com",
        password: "Bruce",
        name: "Change name",
        role: "admin",
        avatar: "https://i.imgur.com/yhW6Yw1.jpg",
      },
    },
  );

  console.log(await response.status());
  const body = await response.json();
  console.log(body);
  id = body.id;
  console.log(id);
});

test("PutUser", async ({ request }) => {
  const response = await request.put(
    `https://api.escuelajs.co/api/v1/users/${id}`,
    {
      data: {
        email: "Bruce@gmail.com",
        password: "8248",
      },
    },
  );
  console.log(await response.json());
  console.log(await response.status());
  console.log(await response.statusText());
});

test("DeletUser", async ({ request }) => {
  const response = await request.delete(
    `https://api.escuelajs.co/api/v1/users/${id}`,
  );

  console.log(await response.status());

  const body = await response.json();
  console.log(body);
});

test("GetallUsers", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking",
  );
  console.log(await response.status());

  const body = await response.json();
  console.log(body);
});

test("singleUser", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking/5",
  );

  const body = await response.json();
  console.log(body);
  console.log(await response.status());
  await expect(response.statusText()).toBe("OK");
});

test("postUser", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "purushoth",
        lastname: " R",
        totalprice: 120,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "lunch",
      },
      headers: "Content-Type: application/json",
    },
  );

  const body = await response.json();
  console.log(body);
  id = body.bookingid;
  console.log(id);

  console.log(await response.status());
  console.log(await response.statusText());
});

let accessToken;

test("authtoken", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: "Content-Type: application/json",
      data: {
        username: "admin",
        password: "password123",
      },
    },
  );
  const responseBody = await response.json();
  console.log(responseBody.access_token);

  accessToken = body.token;
});

test("putuser", async ({ request }) => {
  const responseToken = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
      headers: { "Content-Type": "application/json" },
    },
  );
  const newToken = await responseToken.json();
  const accessToken = await newToken.token;
  console.log(accessToken);

  const response = await request.put(
    "https://restful-booker.herokuapp.com/booking/3",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: `token=${accessToken}`,
      },
      data: {
        firstname: "Purushothaman",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    },
  );
  console.log(await response.status());
  console.log(await response.statusText())
  console.log(await response.json())
});

test.only("Patch",async({request})=>{
const responseToken=await request.post("https://restful-booker.herokuapp.com/auth",{

  data: {
        username: "admin",
        password: "password123",
      },
      headers: {"Content-Type":"application/json"}

})
const newTokken=await responseToken.json()
const usingToken=await newTokken.token
console.log(usingToken);
  const response=await request.patch('https://restful-booker.herokuapp.com/booking/1',{
   headers:{
     "Content-Type": "application/json",
      Accept: "application/json" ,
      Cookie: `token=${usingToken}` 
   },
   data:{
     "firstname" : "purushoth",
    "lastname" : "Bruce"
   }
  })
  const newToken=await response.json()
  console.log(newToken);
  console.log(await response.status());
})

test('Get the user',async({request})=>{

  const response=await request.get('https://reqres.in/api/users')

  console.log(response.status())
  const body=await response.json()
  expect(await response.statusText()).toBe('OK')
  console.log(body)

})

test('PostMethod',async({request})=>{
  const response=await request.post('https://reqres.in/api/users',
    {
      headers:{
         "Content-Type": "application/json",
      }, 
      data:{
        first_Name: 'Purushoth',
        last_Name:'Bruce'
      }
  })
  const body=await response.json()
  console.log(body)
  console.log(response.statusText())
  expect(response.statusText()).toBe('Created')
  console.log(response.status())
  id=body.id
  console.log(id)
})

test('PutMethod',async({request})=>{
   const response= await request.put(`https://reqres.in/api/users/${id}`,
      {
        headers:{"Content-Type": "application/json"},
        data:{
          first_Name:"Purushothaman R",
          last_Name:"Purushoth"
        }
      }
    )
const body=await response.json()
console.log(response.statusText())
console.log(response.status())
console.log(body)

})

test("PatchMethod",async({request})=>{

 const response= await request.patch(`https://reqres.in/api/users/${id}`,
    {
      headers:{"Content-Type":"application/api"},
      data:{
        job:"Automation Tester"
      }
    }
  )
   const body=await response.json()
   console.log(response.status())
   expect(response.statusText()).toBe("OK")
   console.log(body)
})

test('DeleteMethod',async({request})=>{

  const response=await request.delete(`https://reqres.in/api/users/${id}`)

  console.log(response.status())
  console.log(response.statusText())
})