import jwt from 'jsonwebtoken';

class tokenUtils{
 
     constructor(secretKey)
     {
        this.secretKey = secretKey;
     }

     generateToken(payload , expiresIn='1hr')
     {
         return new Promise((resolve,reject)=>{
              jwt.sign(payload,this.secretKey,{expiresIn},(err,token)=>{
                if(err)
                {
                    reject(err);
                }
                else{
                    resolve(token);
                }
              });
         });
     }
     verifyToken(token)
     {
        return new Promise((resolve,reject)=>
        {
            jwt.verify(token,this.secretKey , (err,decode)=>{
                if(err){reject(err);}
                else{resolve(decode);}
            });
        });
     }
}

module.exports = tokenUtils;