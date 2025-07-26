
const jwt = require("jsonwebtoken");  
const User = require("../models/user-model"); 

const protect = async (req,res,next) =>{
try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-userPassword");

    next();
  } catch (err) {
    console.error("Authorization Error:", err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { protect };