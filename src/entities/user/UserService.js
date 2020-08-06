const User = require('./UserModel')

class UserService {
  async findUser(email) {
    return User.findOne({ email })
  }

  async createUser({ email, password, name }) {
    await User.create({ email, password, name })
  }

  async deleteUser(id) {
    await User.findByIdAndDelete(id)
  }
}

module.exports = new UserService()
