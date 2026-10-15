import{test} from "@playwright/test"

test("Download  File",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles('tests/UploadingFiles/FileUpload1.pdf')
    await page.locator('//button[text()="Upload Single File"]').click()
    await page.waitForTimeout(5000)
})

test('multiple files',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#multipleFilesInput').setInputFiles('tests/UploadingFiles/FileUpload1.pdf','tests/UploadingFiles/FileUpload2.pdf')
    await page.locator('//button[text()="Upload Multiple Files"]').click()
    await page.waitForTimeout(5000)
})