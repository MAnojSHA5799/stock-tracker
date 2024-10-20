const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

const stocks = [
    { symbol: 'AAPL', price: 150.50 },
    { symbol: 'GOOG', price: 2700.00 },
    { symbol: 'MSFT', price: 300.75 },
    { symbol: 'AMZN', price: 3400.20 },
    { symbol: 'TSLA', price: 800.60 },
    { symbol: 'NFLX', price: 600.30 },
    { symbol: 'FB', price: 320.45 },
    { symbol: 'NVDA', price: 700.80 },
    { symbol: 'BA', price: 220.25 },
    { symbol: 'IBM', price: 130.90 },
    { symbol: 'CSCO', price: 55.75 },
    { symbol: 'INTC', price: 65.20 },
    { symbol: 'V', price: 180.40 },
    { symbol: 'PYPL', price: 240.60 },
    { symbol: 'DIS', price: 170.15 },
    { symbol: 'GS', price: 400.25 },
    { symbol: 'JPM', price: 150.80 },
    { symbol: 'WMT', price: 140.30 },
    { symbol: 'KO', price: 55.50 },
    { symbol: 'PEP', price: 150.75 }
];
app.get('/api/stocks', (req, res) => {
  stocks.forEach(stock => {
    stock.price = (Math.random() * 100).toFixed(2);
  });
  res.json(stocks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
