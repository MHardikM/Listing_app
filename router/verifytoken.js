const jwt=require("jsonwebtoken")

module.exports = (req,res,next)=>{
    const token=req.header("auth-token");
    if(!token) return res.send("access denied !!")
    try {
        const verified=jwt.verify(token,process.env.TOKEN_SECRECT)
        req.user=verified;
        next();
        
    } catch (error) {
        res.send("token invalid")
    }
}