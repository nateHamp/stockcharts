module.exports = {
    url: 'https://www.stockcharts.com/',
    elements: {
        logIn: 'a[class="btn navbar-btn btn-transparent"]',
        userID: '#form_UserID',
        password: 'input[type="password"]',
        rememberBtn: 'input[name="form_RememberMe"]',
        submit: 'button[class="btn btn-lg btn-success btn-block login-panel-button"]',
        userName: '#nav-userID',
        dashboard: {
            selector: '(//a[@href="/def/servlet/Favorites.CServlet"])[1]',
            locateStrategy: 'xpath',
        },
        portfolio: 'a[href="/def/servlet/Favorites.CServlet?obj=1106084,2&cmd=show&disp=B"]',
        editPortfolio: 'i[class="fas fa-pencil fa-stack-1x fa-inverse"]',
        symbol: 'input[placeholder="Enter Symbol"]',
        chartName: 'input[placeholder="Enter Chart Name"]',
        comments: '#text_NewComments',
        addChart: '#add-one-submit',
        companyName: {
            selector: '(//a[@data-toggle="modal"])[6]',
            locateStrategy: 'xpath',
        },
        tickerName: {
            selector: '(//td[@class="symbol"])[3]',
            locateStrategy: 'xpath',
        },
        commentsName: {
            selector: '(//span[@class="comment"])[3]',
            locateStrategy: 'xpath',
        },
        chartDelete: {
            selector: '(//input[@type="checkbox"])[3]',
            locateStrategy: 'xpath',
        },
        deleteBtn: '#deleteCharts',
        //create and delete alert
        createAlert: 'a[class="list-group-item noalerts"]',
        alertType: {
            selector: '(//span[@class="label"])[2]',
            locateStrategy: 'xpath',
        },
        alertWhen: 'input[class="entryInput"]',
        crossesAlert: 'input[class="entryInput"]',
        saveAlert: '#savePriceAlert',
        savedAlert: {
            selector: '(//span[@class="label"])[1]',
            locateStrategy: 'xpath',
        },
        deleteAlert: '.delete',
        runScan: 'button[class="btn btn-green btn-sm btn-rounded btn-margin-0"]',
        article: {
            selector: '(//a[@href="/articles/"])[1]',
            locateStrategy: 'xpath',
        },
        articleTime: {
            selector: '(//span[@class="blog-home-article-date"])[1]',
            locateStrategy: 'xpath',
        },
        readMore: {
            selector: '(//a[text()="Read More "])[1]',
            locateStrategy: 'xpath',
        },
        stockWord: {
            selector: '//div[@id="pagecontents"]',
            locateStrategy: 'xpath',
        },
        website: {
            selector: '(//li[@class="last"])[1]',
            locateStrategy: 'xpath',
        },
        perc: '#priceAlertPercent',
        pricePerc: {
            selector: '(//a[@href="#"])[13]',
            locateStrategy: 'xpath',
        },
        chartTable: 'a[class="list-group-item noalerts"]',
        price1: {
            selector: '(//span[@class])[15]',
            locateStrategy: 'xpath',
        },
        price2: {
            selector: '(//span[@class])[19]',
            locateStrategy: 'xpath',
        },
        price3: {
            selector: '(//span[@class])[23]',
            locateStrategy: 'xpath',
        },
        price4: {
            selector: '(//span[@class])[27]',
            locateStrategy: 'xpath',
        },
        
    }
}
