const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const roles = ['user', 'admin']

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: [isEmail, 'Invalid email'],
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 64
  },
  role: {
    type: String,
    enum: roles,
    default: 'admin'
  }
}, { timestamps: true })

UserSchema.pre('save', async function save(next) {
  try {
    if (!this.isModified('password')) return next()
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    return next()
  } catch (error) {
    return next(error)
  }
})

module.exports = mongoose.model('User', UserSchema);
