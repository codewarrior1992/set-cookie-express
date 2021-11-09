const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/login',(req,res)=>{

  let token = jwt.sign({email:req.email}, "hello" , {
    expiresIn: '1h'
  });

  // secure 會影響之後的 reqest 是否夾帶 cookie
  res.cookie('token', token, { maxAge: 60 * 1000, httpOnly: true});
  
  console.log('REQ_TOKEN: ', req.cookies.token);

  res.json({
    token
  })
})


router.post('/test',(req,res)=>{

  console.log('REQ_TOKEN: ', req.cookies.token);

  res.json({
    cookie: req.cookies.token,
    msg :'成功夾帶 cookie'
  })
})


module.exports = router