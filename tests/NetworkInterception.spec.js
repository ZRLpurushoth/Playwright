
import{test} from "@playwright/test"
import { json } from "node:stream/consumers"

test("broken Image",async({page})=>{

    await page.route("*/**.{jpeg,jpg,img,png}",async route=>{

      await route.abort()
    })
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(1000)
})

test("modify the product",async({page})=>{

    await page.route("**/api/v1/products",async route=>{

        const request= route.request()

        if(request.method()==="GET"){
            console.log("request Method"+request.headers())
            
        }
         console.log(request.url())
         console.log(request.method())
        await route.continue()
    })

    await page.goto('https://fakeapi.platzi.com/')
    await page.waitForTimeout(10000)
})

test.only("Post the user",async({page})=>{
    await page.route("**/api/users",async route=>{

       const response= await route.fetch()
       console.log("Status",response.status())
       console.log("Content-Type",response.headers()["content-type"])
        const json = await response.json()  
       json.data.push({
"id": 256,
"userName": "Quality Assurance Engineer",
"deleted": false,
"status": true,
"employee": {
"empNumber": 7,
"employeeId": "156",
"firstName": "purushothaman",
"middleName": "purushoth",
"lastName": "R",
"terminationId": null,
"userRole": {
"id": 1,
"name": "Admin",
"displayName": "Admin"
}
}
    })
    //    json.users.push({"customerKey" : 1554,
    //           "username" : "purushothaman",
    //           "email" : "purushoth06@example.com",
    //            "firstName" : "purushoth",
    //             "lastName" : "R"})
       console.log(json)
       await route.fulfill({response:response,json:json})
    })
    await page.goto('https://opensource-demo.orangehrmlive.com/')
})