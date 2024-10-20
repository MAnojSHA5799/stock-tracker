import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PriceDisplay({ selectedStock }) {
    const [price, setPrice] = useState(null);
    const [stock, setStock] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://mini-stock-backends.vercel.app/api/stocks');
          console.log("Response:", response);
          let data = response.data
          setStock(data)
          const selectedStockData = data.find((stock) => stock.symbol === selectedStock);
          console.log("Selected Stock Data:", selectedStockData);
          if (selectedStockData) {
            setPrice(selectedStockData.price);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
  
      const interval = setInterval(fetchData, 60000); // Fetch data every minute
  
      return () => {
        clearInterval(interval);
      };
    }, [selectedStock]);
  
    return (
        
      <div className="price-display-container">
        
        {selectedStock ? (
          <h3>
            Current price of {selectedStock}: {price ? `$${price}` : 'Loading...'}
          </h3>
        ) : (
          <p>Please select a stock.</p>
        )}
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {stock.map((stock, index) => (
        <Card key={index} sx={{ minWidth: 7, marginBottom: 2, backgroundColor: '#fbe9e7' }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Stock Name - {stock.symbol} 
            </Typography>
            <Typography variant="h5" component="div">
              Price - ${stock.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
      </div>
    );
  }
  
  export default PriceDisplay;
