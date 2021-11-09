const router = require('express').Router();
const jwt = require('jsonwebtoken');

function decodeJWT(req,res,next){
  console.log('token from client',req.cookies.token);
  
  try{
    let decode = jwt.verify(req.cookies.token,"hello");
    req.decode = decode;
    next()
  } catch(err){
    res.send({
      err
    })
  }
}

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

router.post('/test', decodeJWT ,(req,res)=>{
  res.json({
    msg :'success',
    decode : req.decode
  })
})


module.exports = router