var express = require('express')
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res)=>{
  const date = new Date();
  res.json(`${date.getFullYear()}`)
})

module.exports = router;
