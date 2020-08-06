const { UNAUTHORIZED } = require('http-status-codes')

const AuthService = require('../entities/auth/AuthService')

async function validateAuth(ctx, next) {
  const { authorization } = ctx.request.headers

  if (!authorization) {
    ctx.status = UNAUTHORIZED
    ctx.body = {
      error: 'Missing authorization token'
    }
    return
  }

  const [, token] = authorization.split(' ')

  try {
    await AuthService.verifyToken(token)
  } catch {
    ctx.status = UNAUTHORIZED
    ctx.body = {
      error: 'Invalid token'
    }
    return
  }

  await next()
}

module.exports = validateAuth
