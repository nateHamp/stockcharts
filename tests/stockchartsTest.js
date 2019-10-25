var stockchartsPO
var fs = require('fs')
var t = ''
module.exports = {
    beforeEach: browser => {
        stockchartsPO = browser.page.stockchartsPO()
        stockchartsPO.navigate()
    },

    'Log in/logout': browser => {
        stockchartsPO
            .click('@logIn')
            .setValue('@userID', 'nathanhampton.pt@gmail.com')
            .setValue('@password', 'HOMER-ORCA-145')
            .click('@rememberBtn')
            .click('@submit')
            .verify.containsText('@userName', 'Nathan')
    },

    'Add/delete stock to portfolio': browser => {
        stockchartsPO
            .click('@dashboard')
            .click('@portfolio')
            .click('@editPortfolio')
            .setValue('@symbol', 'BKYI')
            .setValue('@chartName', 'Bio Key International')
            .setValue('@comments', 'Whats a Bio Key International?')
            .click('@addChart')
            .verify.containsText('@companyName', 'Bio Key International')
            .verify.containsText('@tickerName', 'BKYI')
            .verify.containsText('@commentsName', 'Whats a Bio Key International')
            .click('@chartDelete')
            .click('@deleteBtn')
            .api.acceptAlert()
        stockchartsPO
            .expect.element('@tickerName').to.not.contain.text('BKYI')
    },

    'Create/save new alert': browser => {
        stockchartsPO
            .click('@dashboard')
            .click('@createAlert')
            .click('@alertType')
            .moveToElement('@website', 0, 0)
            .setValue('@alertWhen', 'BBY')
            .click('@crossesAlert')
            .click('@perc')
            .waitForElementVisible('@pricePerc')
            .moveToElement('@pricePerc', 0, 0)
            .waitForElementVisible('@saveAlert')
            .click('@saveAlert')
            .verify.containsText('@savedAlert', 'BBY Crosses Above')
            .click('@deleteAlert')
            .api.acceptAlert()
        stockchartsPO
            .expect.element('@savedAlert').to.not.contain.text('BBY Crosses Above')
    },

    'Split stocks into loss and gain objects': browser => {
        let ticker = []
        let price = []
        
        stockchartsPO
            .click('@dashboard')
            
            .click('@portfolio')
        for (let i = 1; i < 5; i++) {
            stockchartsPO
                .api.useXpath()
            stockchartsPO
                .api.maximizeWindow()
            stockchartsPO
                .moveToElement(`(//td[@class])[${i}]`, 10, 10)
            stockchartsPO
                .getText(`(//td[@class])[${i}]`, function (result) {
                    ticker[i - 1] = result.value.replace(/ /gi,"")
                    //console.log(ticker[i - 1])
                })
                
        }
        stockchartsPO
        .perform(()=>{
            stockchartsPO
            .getText('@price1', function (result){
                  price[0] = result.value                 
            })
            stockchartsPO
            .getText('@price2', function (result){
                price[1] = result.value                 
            })
            stockchartsPO
            .getText('@price3', function (result){
                price[2] = result.value 
            })
            stockchartsPO
            .getText('@price4', function (result){
                price[3] = result.value 
                //console.log(price)
            })
             
        })
        stockchartsPO
        .perform(()=>{
            let gain = {}
            let loss = {}
            ticker.forEach((key, i) => {
                if(price[i] >= 0){
                    gain[key] = price[i]
                } else {
                    loss[key] = price[i]
                }
            })
            // stockchartsPO
            // .verify.containsText('@price1', gain['ASA-ASAGoldandPreciousMetalsLtd.'])
            // .verify.containsText('@price2', gain['BBY-BestBuyCo,Inc.'])
            // .verify.containsText('@price3', gain['BSX-BostonScientificCorp.'])
            // .verify.containsText('@price4', loss['CNK-CinemarkHoldingsCorp.'])
            // fs.writeFileSync('./gain/text.json', 'Gain and stale charts' + gain)
            // fs.writeFileSync('./loss/text.json', 'Loss charts' + loss)
            console.log('gain', gain)
            console.log('loss', loss)
        })
    },
    
    'Article relevancy/time relevancy': browser => {
        //var word = ''
        stockchartsPO
            .click('@article')
            .waitForElementVisible('@articleTime')
            .getText('@articleTime', function(result){
            var text1 = result.value
            var exists = false;
                    if (text1.includes("now") || text1.includes("m") || text1.includes("h")) {
                        exists = true
                    }
                    stockchartsPO.verify.ok(exists, "Checking if the time indicators 'now', 'm', or 'h', exist in the time stamp.")
            })
            .click('@readMore')//used xpath text() selector
            .getText('@stockWord', function (result) {
                var text = result.value
                browser.perform(() => {
                    //     if (text.includes("stocks")) {
                    //         word = "stocks"

                    //     } else if (text.includes("stock")) {
                    //         word = "stock"

                    //     } else if (text.includes("charts")) {
                    //         word = "charts"

                    //     } else if (text.includes("chart")) {
                    //         word = "chart"

                    //     } else {
                    //         word = "Article not relevant."

                    //     }
                    //     console.log(`Word should exist "${word}"`)
                    // stockchartsPO.verify.containsText('@stockWord', word)
                    var exists = false;
                    if (text.includes("stocks") || text.includes("stock") || text.includes("charts") || text.includes("chart")) {
                        exists = true
                    }
                    stockchartsPO.verify.ok(exists, "Checking if the words 'stocks', 'stock', 'charts', or 'chart' exist in the article.")
                })


            })
    },

}