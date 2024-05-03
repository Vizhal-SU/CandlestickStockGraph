# Candlestick Graph

This is a website made using react, html and tailwind-css. It displays, the daychart, hourchart and 5-mins charts and can also switch between light and dark modes. <br>
`API: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=demo/'` <br>
If the number of calls have exceeded the limit, use the local server by running
```code
npx json-server ./src/db.json
```
which contains the same data locally
 
