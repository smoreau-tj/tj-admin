const express = require('express');
const dotenv = require('dotenv')

// Load env vars 
dotenv.config({path: './config/config.env'});
const app = express();
const PORT  = process.env.PORT || 5000;

// Routes 
const items = require('./routes/items')
const groups = require('./routes/groups')

app.use('/api/v1/items', items)
app.use('/api/v1/groups', groups)

app.get('/', (req, res) => {
  res.send('eh... whats up doc!')
});

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    "success": true,
    "msg": "received Successfully",
    "data": {
    }
  })
})

app.patch('/api/v1/item-groups', (req, res) => {
  res.status(200).json({
    "success": true, 
    "data": {
    }
  })
})
app.listen(PORT, ()=> console.log(`running on ${process.env.NODE_ENV} mode! Listening on port: ${PORT}`));