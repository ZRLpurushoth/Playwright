import{test} from "@playwright/test"

test("launch", async({page})=>{

    await page.goto("https://www.google.com/")
    
})