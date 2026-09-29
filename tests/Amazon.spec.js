
import{test,chromium} from "@playwright/test"


test ("Amazon",async({page})=>{

    await page.goto("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Fsettings%2Fconsole%2Fregistration%3Freturn_to%3D%2Fapps-and-games%2Flogin-with-amazon&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=mas_dev_portal&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_developer_portal&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&language=en_US")
    await page.locator('[name="email"]').fill("8248434039")
    await page.locator('[type="submit"]').click()
    await page.locator('[id="ap_password"]').fill("Purushoth@06")
    await page.locator('[id="auth-signin-button"]').click()
    await page.waitForTimeout(5000)
})


test ("flipcart",async({page})=>{

    await page.goto("https://www.flipkart.com/account/login?ret=/")

    await page.locator('[class="c3Bd2c yXUQVt"]').fill("8248434039")
    await page.locator('[class="dSM5Ub Kv3ekh KcXDCU"]').click()
    await page.waitForTimeout(5000)
    await page.locator('[class="dSM5Ub VGJZ_8 KtnAdx"]').click()
    await page.waitForTimeout(3000)

})