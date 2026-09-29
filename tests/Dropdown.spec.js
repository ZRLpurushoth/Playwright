import{test,expect} from "@playwright/test"
import { text } from "node:stream/consumers"

test("single dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const single=await page.locator('//div[@class="form-group"]//select[@id="country"]//option[contains(@value,"")]').allTextContents()
  for(const count of single)
               console.log(count)
    await page.waitForTimeout(2000)
    

})

test("selectByValue",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption({value:"India"})
    await page.waitForTimeout(2000)

})
test("selectByText",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption({label:"France"}) 
    await page.waitForTimeout(3000)

})
test("selectByIndex",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption({index:5})
    await page.waitForTimeout(2000)
})

test("Multidropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.fill('#name','Purushothaman R')
    await page.fill('#email','Purushoth06@gmail.com')
    const atri=await page.getAttribute('#email','class')
    console.log(atri);
    await page.fill('#phone','8248434039')
    await page.fill('#textarea','2/12B vanatharaya palaiya street')
    await page.click('//label[text()="Male"]')
    await page.check('//div[@class="form-check form-check-inline"]/label[text()="Saturday"]')
    await page.selectOption('#country',{label:'India'})
  console.log(await expect.soft(page.locator('#country option:not(:checked)')).toHaveCount(9))
   const text=  await page.locator('#country option:not(:checked)').allInnerTexts()
  for(const t of text){
  console.log(t);
}
   await expect('India').toHaveLength(5)



await page.waitForTimeout(2000)
    
})

test("MultipleDropDown",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   const col= await page.locator('#colors').selectOption([{value:'red'},{label:'Blue'},{index:5}])
   console.log(col);
   const valu=await page .locator('[id="colors"] option:checked').allInnerTexts()
   for(const val of valu){

    console.log(val);

   }
   
   const valu2=await page.locator('[id="colors"] option:not(:checked)').allInnerTexts()
   console.log(valu2)
   
   await page.waitForTimeout(3000)
   

})
