import{test} from "@playwright/test"
import { serialize } from "node:v8"

//test.describe.configure({mode:"serial"})
test("DayandMonthandYear",async({page})=>{

    await page.goto('https://www.facebook.com/reg/?entry_point=login&next=')
   // await page.locator('[id="_r_4_"] div:nth-child(27)').scrollIntoViewIfNeeded()
//    const day= await page.locator('[fill-rule="evenodd"]').nth(2)
   await page.waitForSelector('//span[text()="Day"]/parent::div/child::div')
   await page.locator('//span[text()="Day"]/parent::div/child::div').click()
// //    await page.locator('[id="_r_4_"][role="listbox"] div:nth-child(27)').scrollIntoViewIfNeeded()
//    await page.waitForSelector('//div[text()="27"]')
   const date= await page.locator('//div[text()="27"]').click()
//await page.waitForSelector('')
   await page.waitForSelector('//span[text()="Month"]/parent::div/child::div')
   await page.locator('//span[text()="Month"]/parent::div/child::div').click()
   await page.locator('//div[text()="July"]').click()

   await page.waitForSelector('//span[text()="Year"]/parent::div/child::div')
   await page.locator('//span[text()="Year"]/parent::div/child::div').click()
   await page.locator('//div[text()="1998"]').click()

//    const mon= await page.locator('#_r_a_ div:nth-child(7)').click()
//    const year= await page.locator('(//div[@id="_r_g_"]/div[@role="option"])[29]').click()

//  await page.getByRole('combobox', { name: 'Select day' }).locator('svg').click();
//   await page.getByText('27', { exact: true }).click();
//     console.log(date,mon,year)
    await page.waitForTimeout(2000)
    
    

})