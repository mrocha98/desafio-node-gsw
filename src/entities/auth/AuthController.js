const { BAD_REQUEST, UNAUTHORIZED } = require('http-status-codes')

const AuthService = require('./AuthService')
const UserService = require('../user/UserService')

class AuthController {
  async login(ctx) {
    const { email, password } = ctx.request.body

    if (!email || !password) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'Missing required fields'
      }
      return
    }

    const user = await UserService.findUser(email)
    const passwordIsValid = user
      ? await AuthService.validatePassword({ ctxPassword: password, storagedHash: user.password })
      : false

    if (!user || !passwordIsValid) {
      ctx.status = UNAUTHORIZED
      ctx.body = {
        error: 'Invalid email or password'
      }
      return
    }

    user.password = undefined // not a good idea to send passwords to client

    const token = await AuthService.generateToken(user._id)

    ctx.body = {
      user,
      token
    }
  }
}

module.exports = new AuthController()
