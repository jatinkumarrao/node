const mongoose= require("mongoose")
const validator = require("validator");

const userSchema =new mongoose.Schema({

    Users:[{
        name:{
            type: String,
            required: true,
            minlength: 6,
            trim:true,
            lowercase:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
                }
            }
        },
        password:{
            type:String,
            trim:true,
            required:true,
            minlength:6,
            validate(value){
                if(value.toLowerCase().includes("password")){
                    throw new Error("password not equal to password")
                }
            }
        },
        age:{
            type: Number,
            default:1,
            validate(value){
                if(value.length<0){s
                    throw new Error("age must be positive")
                }
            }
        },
        }]

})

userSchema.methods.generateAuthToken = async function(){
    const user=this
 //   const token= jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    user.Users=user.Users.concat({user})
    await user.save()
    return user
}
const User= mongoose.model('User',userSchema)

module.exports=User