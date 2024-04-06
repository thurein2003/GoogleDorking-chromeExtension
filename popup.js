var keywords = [
    { keyword: "intext:", purpose: "Searches for pages with specific text in the body." },
    { keyword: "site:", purpose: "Searches within a specific site or domain." },
    { keyword: "intitle:", purpose: "Searches for pages with a specific title." },
    { keyword: "inurl:", purpose: "Searches for pages with a specific URL." },
    { keyword: "filetype:", purpose: "Filters results to include only files of a specific type." },
    { keyword: "intext:", purpose: "Searches for pages with specific text in the body." },
    { keyword: "cache:", purpose: "Displays Google's cached version of a page." },
    { keyword: "info:", purpose: "Displays information about a page." },
    { keyword: "related:", purpose: "Finds sites related to a specific URL." },
    { keyword: "link:", purpose: "Lists web pages that link to a specific URL." },
    { keyword: "allintitle:", purpose: "Searches for pages with all specified keywords in the title." },
    { keyword: "allinurl:", purpose: "Searches for pages with all specified keywords in the URL." },
    { keyword: "ext:", purpose: "Searches for pages with a specific file extension." },
    { keyword: "inanchor:", purpose: "Searches for pages with specific anchor text in the links pointing to the page." },
    { keyword: "site:linkedin.com/in/", purpose: "Searches for LinkedIn profiles." },
    { keyword: "filetype:xls OR filetype:xlsx", purpose: "Searches for Excel files." },
    { keyword: "filetype:js", purpose: "Searches for JavaScript files." },
    { keyword: "inurl:.js", purpose: "Searches for URLs containing '.js' indicating JavaScript files." },
    { keyword: "intitle:index.of javascript", purpose: "Searches for directories listing JavaScript files." },
    { keyword: "intext:window.location.pathname filetype:js", purpose: "Searches for JavaScript files containing a specific code snippet." },
    { keyword: "intext:document.cookie filetype:js", purpose: "Searches for JavaScript files containing references to cookies." },
    { keyword: "intext:apikey filetype:js", purpose: "Searches for JavaScript files containing API keys." },
    { keyword: "intitle:index.of +.js -jquery", purpose: "Searches for directories listing JavaScript files excluding jQuery files." },
    { keyword: "inurl:wp-content/themes/ filetype:js", purpose: "Searches for JavaScript files within WordPress theme directories." },
    { keyword: "intitle:index.of/wp-content/themes/ filetype:js", purpose: "Searches for directories listing JavaScript files within WordPress themes." },
    { keyword: "intitle:index.of/wp-includes/ filetype:js", purpose: "Searches for directories listing JavaScript files within WordPress includes." },
    { keyword: "site:gov", purpose: "Searches for government websites." },
    { keyword: "site:edu", purpose: "Searches for educational institution websites." },
    { keyword: "site:org", purpose: "Searches for non-profit organization websites." },
    { keyword: "weather:", purpose: "Displays the weather forecast for a specific location." },
    { keyword: "stocks:", purpose: "Displays stock market information." },
    { keyword: "define:", purpose: "Provides the definition of a word or phrase." },
    { keyword: "movie:", purpose: "Shows movie information such as showtimes and reviews." },
    { keyword: "map:", purpose: "Displays a map for a specific location." },
    { keyword: "book:", purpose: "Searches for books related to a specific topic." },
    { keyword: "music:", purpose: "Finds music related to a specific artist, album, or song." },
    { keyword: "package tracking:", purpose: "Tracks packages from various shipping carriers." },
    { keyword: "flight status:", purpose: "Shows the status of flights." },
    { keyword: "time:", purpose: "Displays the current time for a specific location." },
    { keyword: "currency conversion:", purpose: "Converts one currency to another." },
    { keyword: "population:", purpose: "Displays the population of a specific location." },
    { keyword: "site:ac.uk", purpose: "Searches for academic websites in the UK." },
    { keyword: "site:edu.au", purpose: "Searches for educational institution websites in Australia." },
    { keyword: "site:gmail.com", purpose: "Searches for pages on the Gmail domain." },
    { keyword: "site:yahoo.com", purpose: "Searches for pages on the Yahoo domain." },
    { keyword: "site:bbc.co.uk", purpose: "Searches for pages on the BBC domain." },
    { keyword: "site:nytimes.com", purpose: "Searches for pages on the New York Times domain." },
    { keyword: "site:wikipedia.org", purpose: "Searches for pages on the Wikipedia domain." },
    { keyword: "site:amazon.com", purpose: "Searches for pages on the Amazon domain." },
    { keyword: "site:ebay.com", purpose: "Searches for pages on the eBay domain." },
    { keyword: "site:stackoverflow.com", purpose: "Searches for pages on the Stack Overflow domain." },
    { keyword: "site:github.com", purpose: "Searches for pages on the GitHub domain." },
    { keyword: "site:*.stackoverflow.com", purpose: "Searches for pages on subdomains of Stack Overflow." },
    { keyword: "site:*.github.com", purpose: "Searches for pages on subdomains of GitHub." },
    { keyword: "site:*.edu", purpose: "Searches for pages on all educational institution websites." },
    { keyword: "site:*.gov", purpose: "Searches for pages on all government websites." },
    { keyword: "site:*.org", purpose: "Searches for pages on all non-profit organization websites." },
    { keyword: "site:*.mil", purpose: "Searches for pages on all military websites." },
    { keyword: "site:*.int", purpose: "Searches for pages on all international organization websites." },
    { keyword: "site:*.com", purpose: "Searches for pages on all commercial websites." },
    { keyword: "site:*.net", purpose: "Searches for pages on all network provider websites." },
    { keyword: "site:*.info", purpose: "Searches for pages on all information websites." },
    { keyword: "site:*.biz", purpose: "Searches for pages on all business websites." },
    { keyword: "site:*.name", purpose: "Searches for pages on all personal websites." },
    { keyword: "site:*.museum", purpose: "Searches for pages on all museum websites." },
    { keyword: "site:*.coop", purpose: "Searches for pages on all cooperative websites." },
    { keyword: "site:*.aero", purpose: "Searches for pages on all aviation industry websites." },
    { keyword: "site:*.asia", purpose: "Searches for pages on all Asia-related websites." },
    { keyword: "site:*.cat", purpose: "Searches for pages on all Catalan language and culture websites." },
    { keyword: "site:*.jobs", purpose: "Searches for pages on all job-related websites." },
    { keyword: "site:*.tel", purpose: "Searches for pages on all internet communication websites." },
    { keyword: "site:*.travel", purpose: "Searches for pages on all travel industry websites." },
    { keyword: "site:*.xxx", purpose: "Searches for pages on all adult entertainment websites." },
    { keyword: "site:*.co", purpose: "Searches for pages on all Colombian websites." },
    { keyword: "site:*.io", purpose: "Searches for pages on all technology websites." },
    { keyword: "site:*.ai", purpose: "Searches for pages on all artificial intelligence websites." },
    { keyword: "site:*.design", purpose: "Searches for pages on all design-related websites." },
    { keyword: "site:*.dev", purpose: "Searches for pages on all development-related websites." },
    { keyword: "site:*.app", purpose: "Searches for pages on all app-related websites." },
    { keyword: "site:*.blog", purpose: "Searches for pages on all blog websites." },
    { keyword: "site:*.club", purpose: "Searches for pages on all club websites." },
    { keyword: "site:*.edu.au", purpose: "Searches for pages on all Australian educational institution websites." },
    { keyword: "site:*.ac.uk", purpose: "Searches for pages on all UK academic websites." },
    { keyword: "site:*.gov.uk", purpose: "Searches for pages on all UK government websites." },
    { keyword: "site:*.gov.au", purpose: "Searches for pages on all Australian government websites." },
    { keyword: "site:*.org.uk", purpose: "Searches for pages on all UK non-profit organization websites." },
    { keyword: "site:*.mil.uk", purpose: "Searches for pages on all UK military websites." },
    { keyword: "site:*.sch.uk", purpose: "Searches for pages on all UK school websites." },
    { keyword: "site:*.nhs.uk", purpose: "Searches for pages on all UK National Health Service (NHS) websites." },
    { keyword: "site:*.police.uk", purpose: "Searches for pages on all UK police websites." },
    { keyword: "site:*.fire.uk", purpose: "Searches for pages on all UK fire service websites." },
    { keyword: "site:*.rescue.uk", purpose: "Searches for pages on all UK rescue service websites." },
    { keyword: "site:*.ambulance.uk", purpose: "Searches for pages on all UK ambulance service websites." },
    { keyword: "site:*.eu", purpose: "Searches for pages on all European Union websites." },
    { keyword: "site:*.com.au", purpose: "Searches for pages on all Australian commercial websites." },
    { keyword: "site:*.net.au", purpose: "Searches for pages on all Australian network provider websites." },
    { keyword: "site:*.org.au", purpose: "Searches for pages on all Australian non-profit organization websites." },
    { keyword: "site:*.mil.au", purpose: "Searches for pages on all Australian military websites." },
    { keyword: "site:*.int.au", purpose: "Searches for pages on all Australian international organization websites." },
    { keyword: "site:*.com.br", purpose: "Searches for pages on all Brazilian commercial websites." },
    { keyword: "site:*.net.br", purpose: "Searches for pages on all Brazilian network provider websites." },
    { keyword: "site:*.org.br", purpose: "Searches for pages on all Brazilian non-profit organization websites." },
    { keyword: "site:*.mil.br", purpose: "Searches for pages on all Brazilian military websites." },
    { keyword: "site:*.gov.br", purpose: "Searches for pages on all Brazilian government websites." },
    { keyword: "site:*.edu.br", purpose: "Searches for pages on all Brazilian educational institution websites." },
    { keyword: "site:*.com.cn", purpose: "Searches for pages on all Chinese commercial websites." },
    { keyword: "site:*.net.cn", purpose: "Searches for pages on all Chinese network provider websites." },
    { keyword: "site:*.org.cn", purpose: "Searches for pages on all Chinese non-profit organization websites." },
    { keyword: "site:*.gov.cn", purpose: "Searches for pages on all Chinese government websites." },
    { keyword: "site:*.edu.cn", purpose: "Searches for pages on all Chinese educational institution websites." },
    { keyword: "site:*.com.de", purpose: "Searches for pages on all German commercial websites." },
    { keyword: "site:*.net.de", purpose: "Searches for pages on all German network provider websites." },
    { keyword: "site:*.org.de", purpose: "Searches for pages on all German non-profit organization websites." },
    { keyword: "site:*.gov.de", purpose: "Searches for pages on all German government websites." },
    { keyword: "site:*.edu.de", purpose: "Searches for pages on all German educational institution websites." },
    { keyword: "site:*.com.fr", purpose: "Searches for pages on all French commercial websites." },
    { keyword: "site:*.net.fr", purpose: "Searches for pages on all French network provider websites." },
    { keyword: "site:*.org.fr", purpose: "Searches for pages on all French non-profit organization websites." },
    { keyword: "site:*.gov.fr", purpose: "Searches for pages on all French government websites." },
    { keyword: "site:*.edu.fr", purpose: "Searches for pages on all French educational institution websites." },
    { keyword: "site:*.com.mx", purpose: "Searches for pages on all Mexican commercial websites." },
    { keyword: "site:*.net.mx", purpose: "Searches for pages on all Mexican network provider websites." },
    { keyword: "site:*.org.mx", purpose: "Searches for pages on all Mexican non-profit organization websites." },
    { keyword: "site:*.gov.mx", purpose: "Searches for pages on all Mexican government websites." },
    { keyword: "site:*.edu.mx", purpose: "Searches for pages on all Mexican educational institution websites." },
    // Add more keywords and purposes here
  ];
  
   
  document.getElementById('searchButton').addEventListener('click', function() {
    var inputText = document.getElementById('searchInput').value.toLowerCase();
    var resultTable = document.getElementById('resultsContainer');
    resultTable.innerHTML = ''; // Clear previous results

    if (inputText.trim() === "") {
        return; // Exit the function without performing the search
    }

    var result = keywords.filter(function(item) {
        return item.keyword.toLowerCase().includes(inputText) || item.purpose.toLowerCase().includes(inputText);
    });

    result.forEach(function(item) {
        var row = document.createElement('tr');
        var keywordCell = document.createElement('td');
        var purposeCell = document.createElement('td');

        keywordCell.textContent = item.keyword;
        purposeCell.textContent = item.purpose;

        row.appendChild(keywordCell);
        row.appendChild(purposeCell);
        resultTable.appendChild(row);
    });
});

document.getElementById('searchInput').addEventListener('input', function(event) {
    var inputText = event.target.value.toLowerCase();
    var result = keywords.filter(function(item) {
        return item.purpose.toLowerCase().includes(inputText);
    });

    var resultTable = document.getElementById('resultsContainer');
    resultTable.innerHTML = ''; // Clear previous results

    result.forEach(function(item) {
        var row = document.createElement('tr');
        var keywordCell = document.createElement('td');
        var purposeCell = document.createElement('td');

        keywordCell.textContent = item.keyword;
        purposeCell.textContent = item.purpose;

        row.appendChild(keywordCell);
        row.appendChild(purposeCell);
        resultTable.appendChild(row);
    });
});
