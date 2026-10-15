import{test} from "@playwright/test"


test("Date Picker",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const Year="2026"
    const Month="October"
    const Day="29"

    await page.locator('[id="datepicker"]').click()
    while(true){

        const wantedYear=await page.locator('.ui-datepicker-year').textContent()
        const wantMonth=await page.locator('.ui-datepicker-month').textContent()

        if(wantedYear==Year && wantMonth==Month){
            break;
        }

             await page.locator('[title="Prev"]').click()

       
    }
    const dates=await page.$$('[class="ui-state-default"]')

    for(const dt of dates){

        if(await dt.textContent()==Day){
          await dt.click()
          break;
        }
    }
    
    await page.waitForTimeout(3000)

})