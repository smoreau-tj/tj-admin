const express = require('express');
const helmet = require("helmet");
const dotenv = require('dotenv');

// Load env vars 
dotenv.config({path: './config/config.env'});
const app = express();
const PORT  = process.env.PORT || 5000;

app.use(helmet.hidePoweredBy({ setTo: 'PHP/5.4.0'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes 
const items = require('./routes/items');
const groups = require('./routes/groups');
const general = require('./routes/general');

app.use('/', general);
app.use('/api/v1/items', items)
app.use('/api/v1/groups', groups)


app.use(function(req,res) {
  var str = req.originalUrl
  try {
    str = str.substring(1);
    var n = str.indexOf('/');
    var resstr = str.substring(0,n);
    var pkg_path = './routes/' + resstr;
    var func_path = str.substring(n + 1)
    var pkg = require(pkg_path)

  } catch (error) {
    console.log(error);
    return res
    .status(400)
    .send({
      "success": false,
      "msg": {
        "path": "Invalid Path -1"
      }
  });
}
if (pkg && typeof pkg.handle[func_path] === 'function'){
  pkg.handle[func_path] (req, res)
} else {
  return res
    .status(400)
    .send({
      "success": false,
      "message": {
        "path": "Invalid Request Path - 2"
      }
    })
}
});



app.listen(PORT, ()=> console.log(`running on ${process.env.NODE_ENV} mode! Listening on port: ${PORT}`));