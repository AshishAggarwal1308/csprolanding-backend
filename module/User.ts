import mongoose from 'mongoose';

const registerUserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: [true, "Please provide FullName"],
        minlength: [3, "FullName must be at least 3 characters long"],
        maxlength: [50, "FullName cannot exceed 50 characters"]
    },
    Email: {
        type: String,
        required: [true, "Please provide Email"],
        minlength: [5, "Email must be at least 5 characters long"],
        maxlength: [100, "Email cannot exceed 100 characters"],
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        unique: true,  
      },
    Phone:{
        type:Number,
        required:[true ,"Please Enter your Phone number"],
        minlength: [10,"phone number should be of 10"],
        maxlength:[10, "phone number should be of 10"],
        unique: true,

    },

    CreatedDate:{
        type:Date,
        required:true,
        default:new Date()
    }
});

const RegisterUser = mongoose.model('RegisterUser', registerUserSchema);

export default RegisterUser;
