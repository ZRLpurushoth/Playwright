import {test} from "@playwright/test"
import { text } from "node:stream/consumers";

test('single table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //single data
   const data= await page.locator('(//tr/td[text()="Mukesh"])[1]').textContent()
   console.log(data);
   //css
  const table =await page.locator('table[name="BookTable"] tbody tr:nth-child(7) td').allTextContents()
  for(const i of table){

    console.log(i)
  } 
  //single column
  const column=await page.locator('table[name="BookTable"] tbody tr td:nth-child(3)').allTextContents()
  for(const i of column){
 console.log(i)
  }
})

test('dynamic table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //single data
  const data=  await page.locator('#rows tr:nth-child(3) td:nth-child(4)').textContent()
  console.log(data);
//single row
  const table=await page.locator('#rows tr:nth-child(3) td').allTextContents()
  for(const i of table){
    console.log(i);
    
  }
  //single column
  const col=await page.locator('#rows tr td:nth-child(3)').allTextContents()
  for(const i of col){
    console.log(i);
    
  }

  
})

//pagination WebTable

test('pagination',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const val=await page.locator('table#productTable tbody')
    const next=await page.locator('ul#pagination li a')

    await val.first().scrollIntoViewIfNeeded()
    //console.log(await next.count())

   
    for (let i = 0; i < await next.count(); i++) {
      if(i > 0){
        await next.nth(i).click();
      }
      for (let j = 0; j <await val.count(); j++) {
        
        const text=await val.nth(j).locator('tr:nth-child(5)').textContent()
        console.log(text)
      }
      
      
     await page.waitForTimeout(2000)
    }

  })

  test.only('Page Pick',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   const Val= await page.locator('table#productTable tbody tr')
   const pag= await page.locator('ul#pagination li a')

   await Val.first().scrollIntoViewIfNeeded()
   let name=['Smartphone','Action Camera','Smart Home Hub','Wireless Mouse 20']
   //let id=[3,8,13,18]

   for(let i=0; i<await pag.count(); i++){

    if(i>0){
      await pag.nth(i).click()
    }

    for(let j=0; j<await Val.count(); j++){

    const text=await Val.nth(j).innerText() //locator('tr')
     //console.log(text)

    for(const names of name){

    if(text.includes(names)){

      console.log("Found :"+ names)
      await Val.nth(j).locator('input[type="checkbox"]').first().waitFor()
      await Val.nth(j).locator('input[type="checkbox"]').check()
     // await page.waitForTimeout(3000)
    }
   }
    }
   
  
   }

  })