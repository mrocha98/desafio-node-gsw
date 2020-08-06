const { CREATED, BAD_REQUEST, NO_CONTENT } = require('http-status-codes')

const UserService = require('./UserService')

class UserController {
  async create(ctx) {
    const { email, password, name } = ctx.request.body

    if (!email || !password || !name) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'Missing required fields'
      }
      return
    }

    const user = await UserService.findUser(email)

    if (user) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'This e-mail is already in use by someone'
      }
      return
    }

    try {
      await UserService.createUser({ email, password, name })
      ctx.status = CREATED
    } catch (err) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: err
      }
    }
  }

  async destroy(ctx) {
    const { id } = ctx.params

    try {
      await UserService.deleteUser(id)
      ctx.status = NO_CONTENT
    } catch (err) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: err
      }
    }
  }
}

module.exports = new UserController()
