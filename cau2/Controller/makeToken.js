import { createToken } from "../Service/checkAndCreateToken.js";
const privateKey = "abcdef";
export const makeToken= async (req,res,next)=>{
    const result=  await createToken(privateKey);
 
    return res.json({
      token:result
    });
}