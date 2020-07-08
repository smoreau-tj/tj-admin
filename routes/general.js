const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('eh... whats up doc!')
});

router.patch('/api/v1/item-groups', (req, res) => {
  res.status(200).json({
    "success": true, 
    "data": {
    }
  })
})

.get('/api/v1', (req, res) => {
  res.status(200).json({
    "success": true,
    "msg": "received Successfully",
    "data": {
    }
  })
})


module.exports = router;