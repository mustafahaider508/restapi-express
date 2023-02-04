 const mongoose = require("mongoose");



 const userSchema = mongoose.Schema(
   {
     email: {
       type: String,
       required: [true, "please add an email"],
     },
     password: {
       type: String,
       required: [true, "please add password"],
     },
     name: {
       type: String,
       required: [true, "please add name"],
     },
   },
   {
     timestamps: true,
   }
 );

 module.exports = mongoose.model("User", userSchema);