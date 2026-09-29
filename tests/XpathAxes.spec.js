import{test} from "@playwright/test"
import { log } from "node:console"

test ("xpath axes",async({page})=>{
    await page.goto("https://www.amazon.in/s?k=iphone+17&crid=3H2D3TD7EXOTO&sprefix=%2Caps%2C257&ref=nb_sb_ss_recent_1_0_recent")
   await page.locator('(//h2[@class="a-size-mini s-line-clamp-1"]//span[contains(text(),"OnePlus")])[2]').scrollIntoViewIfNeeded()
    const f=await page.locator('(//h2[@class="a-size-mini s-line-clamp-1"]//span[contains(text(),"OnePlus")])[2]').press("Enter")
    await page.waitForTimeout(4000)    
})


