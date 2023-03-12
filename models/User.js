import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    userName: {
        type: String,
        required: true,
        unique: [true, "username already exists"]
        minLength: [4, "Your username must be at least 4 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Account already exists"],
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter your email"],
        minLength: [6, "Your password must be at least 6 characters long"],
        select: false, //dont send back password after request
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: [
                'user',
                'editor',
                'reviewer',
                'admin'
            ],
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

// ENCRYPTION 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


export default mongoose.models.User || mongoose.model('User', userSchema)