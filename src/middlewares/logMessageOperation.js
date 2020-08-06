const LogService = require('../entities/log/LogService')

async function logMessageOperation(ctx, next) {
  await next()

  const { userId, message, code } = ctx.state

  if (!userId) {
    throw new Error('Missing user ID')
  }

  if (!message || !code) return

  try {
    await LogService.register({ userId, message, code })
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = logMessageOperation
