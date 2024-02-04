const mongoose = require('mongoose')

const userSchema = new mongoose.Schema (
    {
        username:{
            type: String
        } , 
        password:{
            type: String
        }, 
        name:{
            type: String
        }, 
        age:{
            type: String
        }, 
        phoneNumber:{
            type: String
        },
        email:{
            type: String
        }
    }
    );

const user = mongoose.model("user", userSchema);

module.exports = user;