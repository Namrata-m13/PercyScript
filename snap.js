const PercyScript = require("@percy/script")

PercyScript.run(async(page, percySnapshot)=>{
    await page.goto("https://www.google.com")
    await page.waitFor("[name='q']")
    await page.type("[name='q']","Percy")

    await percySnapshot("Search",{widths: [769, 993, 1200]})


})
