const mongoose = require('mongoose')

const { crypt } = require('../../utils/encrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
})

userSchema.pre('save', async function (next) {
  this.password = await crypt({ value: this.password })
  next()
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
