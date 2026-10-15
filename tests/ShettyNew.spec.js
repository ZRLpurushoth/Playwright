import {test} from "@playwright/test"

test('Keyboard Actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('textbox',{name:'Enter Name'}).click()
    await page.keyboard.type('Purushothaman R')
    await page.waitForTimeout(2000)
})

test('Mouse Actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const drag=await page.locator('//p[text()="Drag me to my target"]')
    const need= await page.locator('//p[text()="Drop here"]')

    await need.dragTo(drag)
})
