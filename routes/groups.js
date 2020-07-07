const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    "success": true,
    "msg": `received Query Successfully ${req.query.query}`,
    "data": [
      {
        "id": 5576,
        "title": "Product A",
        "groups": [
          { "id": 17, "title": "Group A" }
        ]
      }
    ]
  })
})

router.get('/:id', (req, res) => {
  res.status(200).json({
    "success": true,
    "msg": `received Query Successfully ${req.query}`,
    "data": {
      "id": 5576,
      "title": "Product A",
      "handle": "product_a",
      "groups": [
        { "id": 17, "title": "Group A" }
      ]
    }
  })
})






module.exports = router