import{test} from "@playwright/test"

test.only('amazon',async({page})=>{

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


test ('flipcart',async({page})=>{

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
