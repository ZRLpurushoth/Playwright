import{test,expect} from "@playwright/test"
import fs from "fs"
import  {PDFParse}  from "pdf-parse"
import path from "path"



 test("Validate the PDF", async ({ page }) => {

    // Create PDF parser
    const pdfData = new PDFParse({ url : "C:/Users/rpuru/Downloads/Sample.pdf" });

    // Extract PDF text
    const parser = await pdfData.getText()

    console.log(parser);

    // Validate number of pages
    // expect(parser.total).toBe(1);

    // // Validate PDF content
    // expect(parser.text).toContain("PDF file");
}) 