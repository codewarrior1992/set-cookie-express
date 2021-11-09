const router = require('express').Router();

router.get('/',(req,res)=>{
  res.json({
    msg: 'get product route'
  })
})

module.exports = router