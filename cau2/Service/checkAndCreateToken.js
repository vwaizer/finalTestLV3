import jwt from "jsonwebtoken";
export const   createToken =  (privateKey) =>  {
    
    return  new  Promise((resolve, reject) => {
       jwt.sign(
        { username: "admin", password: "1234" },
        privateKey,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            reject(err.message);
          }
          resolve(token);
        }
      );
    });
  };

  export const checkToken=(privateKey,token)=>{
    return new Promise((resolve,reject)=>{
      const decode=jwt.verify(token,privateKey,{maxAge:"1h"},(err,token)=>{
        if(err){
          reject(err.message)
        }
        resolve(token);
        
      });
      
    })
  }