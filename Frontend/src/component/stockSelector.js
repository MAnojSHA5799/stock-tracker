import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function StockSelector({ stocks, selectedStock, onSelectStock }) {
  return (
    <div>
      <Box sx={{ minWidth: 5 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Select Stock</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedStock}
          label="Select a stock"
          onChange={(e) => onSelectStock(e.target.value)}
        >
            {stocks.map((stock) => (
          <MenuItem key={stock.symbol} value={stock.symbol}>{stock.symbol}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}

export default StockSelector;
