const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  //get token from auth header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  //check for token
  if (!token) {
    return res.status(403).json({
      message: "No token provided!",
    });
  }
  jwt.verify(token, process.env.SECRET,(err,decoded)=>{
    if(err){
        return res.status(401).json({
          message: "Invalid token!",
        });
    }
    req.user = decoded;
    next();
  });

  
};

module.exports = verifyToken;
