const express = require('express');
const dotenv = require('dotenv')

// Load env vars 
dotenv.config({path: './config/config.env'});
const app = express();
const PORT  = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('eh... whats up doc!')
});
app.get('/api/item-groups', (req, res) => {
  res.send()
})
app.listen(PORT, ()=> console.log(`running on ${process.env.NODE_ENV} mode! Listening on port: ${PORT}`));