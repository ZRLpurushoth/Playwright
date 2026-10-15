import{expect, test} from "@playwright/test"
import { log } from "console"

test('amazon',async({page})=>{

    await page.goto('https://www.amazon.in')
    await page.locator('[name="field-keywords"]').fill('Samsung')
    await page.locator('//input[@id="twotabsearchtextbox"]/parent::div/parent::div/following::div[@id="nav-flyout-iss-anchor"]/div/div/div/div[@class="left-pane-results-container"]').first().waitFor()
    const text=await page.locator('//input[@id="twotabsearchtextbox"]/parent::div/parent::div/following::div[@id="nav-flyout-iss-anchor"]/div/div/div/div[@class="left-pane-results-container"]').allInnerTexts()
     console.log(text)
   // await page.locator('//div[@class="left-pane-results-container"]/descendant::span').first().waitFor()
   //await page.keyboard.press('Enter')
   //const text= await page.locator('//div[@class="left-pane-results-container"]/descendant::div[@role="button"]').allTextContents()
  //const product= await page.locator('(//span[contains(text(),"iPhone Air 256 GB")])[1]').innerText()
   //const price=await page.locator('(//span[contains(text(),"iPhone Air 256 GB")]/parent::h2/parent::a/following::div[@class="puisg-row puis-desktop-list-row"]/descendant::a/span[@class="a-price"]/span[text()="₹1,01,900"])[1]').innerText()
  //  for(let i of iphone){


  //  }
  //console.log("Product:"+product)
 // console.log("price:"+price)
// await page.locator('//h2[@class="a-size-mini s-line-clamp-1"]/span[text()="XIAOMI"]/following::a/h2/span[contains(text(),"Galaxy")]').first().waitFor()
// const products= await page.locator('//h2[@class="a-size-mini s-line-clamp-1"]/span[text()="XIAOMI"]/following::a/h2/span[contains(text(),"Galaxy")]').allInnerTexts()
// for(let i of products){
// console.log(i)
//}
  // await page.locator('//div[@class="left-pane-results-container"]/descendant::span').last().click()

  // await page.waitForTimeout(2000)
   


})


test.only('flipcart',async({page,context})=>{

  await page.goto('https://www.flipkart.com/')
 await page.locator('//span[@role="button"]').click()
 await page.locator('(//input[@placeholder="Search for Products, Brands and More"])[1]').fill('iphone 17')
 
 //await page.locator('//a[@tracking="[object Object]"]/div/span').first().waitFor()
 //const text=await page.locator('//a[@tracking="[object Object]"]/div[@class="VDtK0l _1psv1ze2u _1psv1ze53 _1psv1ze9x _1psv1ze7o"]').allTextContents()
 // await page.locator('//ul[@class="VCplLH lTpUwR _1psv1ze5l _1psv1ze9l _1psv1ze7c _1cisqlf2"]//li[@class="Swx5kP"]').first().waitFor()
 const text=await page.locator('//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1b1g84l r-tuq35u r-u8s1d r-q4m81j r-1r0gou5"]').allTextContents()
 console.log(text);
 await page.waitForTimeout(2000)
 



})

test("amazon iphone",async({page,context})=>{

  await page.goto("https://www.amazon.in/")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone17")
  await page.keyboard.press("Enter")
  const iphone=await Promise.all([context.waitForEvent('page'),page.locator('(//span[contains(text(),"iPhone 17 Pro 512 GB")])[1]').click()])

  const pagesall=await context.pages()
  const pagesCount=await pagesall.length
  console.log(pagesCount);

  for(let p of pagesall){
    console.log(await p.title())
    if(await p.title()=="iPhone 17 Pro"){
      await expect(p.locator('[class="a-spacing-small po-brand"]')).toContainText('Apple')
    }
  }
  
  
 await page.waitForTimeout(3000)
})


test("amazon colour",async({page,context})=>{

  await page.goto("https://www.amazon.in/")

  await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone 17")
  await page.keyboard.press("Enter")
  await Promise.all([context.waitForEvent('page'),page.locator('(//span[contains(text(),"iPhone 17 Pro 512 GB")])[1]').click()])
  const colour=await context.pages()
  const allpage=await colour.length
  console.log(allpage)

  for(let p of colour){

   console.log(await p.title())
   
 if((await p.title()).includes("iPhone 17 Pro")){

  await p.locator('#inline-twister-expanded-dimension-text-color_name').waitFor()

  await p.locator('[id="color_name_2"][class="a-button a-button-toggle image-swatch-button-with-slots"]').hover()
  await p.locator('[id="color_name_2"][class="a-button a-button-toggle image-swatch-button-with-slots"]').click()
 }

console.log("colour changed")
  await page.waitForTimeout(3000)
  }
  
})


test('Dropdown list',async({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/')
  const country=await page.locator("#country option").allTextContents()
  for(const c of country){
    console.log(c)
  }
})

test('Days List',async({page})=>{
  
  await page.goto('https://testautomationpractice.blogspot.com/')
  const Days=await page.locator('//div[@class="form-check form-check-inline"]/input[@type="checkbox"]')
 let count=await Days.count()

 for(let i=0; i<count; i++){
  const day=await Days.nth(i).getAttribute("value")
  console.log(day)
 }
})


test('Second Largest Price',async({page})=>{

  await page.goto('https://www.amazon.in/')
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone 17")
  await page.keyboard.press('Enter')
  await  page.locator('//div[@class="a-section a-spacing-small a-spacing-top-small"]').first().waitFor()
  const mobiles= page.locator('//div[@class="a-section a-spacing-small a-spacing-top-small"]')

  const count=await mobiles.count()
  let product=[]

  for(let i=0; i<count; i++){
    let mobile=mobiles.nth(i)

    let name=mobile.locator("xpath=.//h2").first()
    let price=mobile.locator('xpath=.//span[@class="a-price-whole"]').first()

    if(await name.count()>0 && await price.count()>0){
      let mobileName=await name.innerText()
      let PriceDetail=await price.innerText()

      console.log("mobileName :",mobileName)
      console.log('PriceDetail :',PriceDetail)
       
      let totalPrice=Number(PriceDetail.replace(/[^0-9]/g,''))
      if(totalPrice>0){
        console.log("mobileName :",mobileName)
        console.log("PriceDetail :",PriceDetail)
        product.push({name:mobileName,price:PriceDetail})
      }
  
    }
  }
  let SecondLargestPrice=-Infinity
  let highestPrice=-Infinity
  let ProductName=null
  let SecondProduct=null

  for(let j=0; j<product.length; j++){

    if(highestPrice<product[j]){

      SecondLargestPrice=highestPrice
      SecondProduct=ProductName

      highestPrice=product[j]
      ProductName=product[j]
    }else if(highestPrice>product[j] && SecondLargestPrice<product[j]){
      SecondLargestPrice=product[j]
      SecondProduct=product[j]

    }
  }
  console.log('ProductName :',ProductName)
  console.log("HigestPrice :",highestPrice)
  

  console.log("SecondHighestPrice",SecondProduct)
  console.log("SecondHighestPrice :",SecondLargestPrice)
  
  

})
