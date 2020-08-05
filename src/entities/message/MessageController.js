const { BAD_REQUEST } = require('http-status-codes')

const MessageModel = require('./MessageModel')
const Message = new MessageModel()

class MessageController {
  convertToCode(ctx) {
    const { message } = ctx.request.query

    if (!message) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'Nothing was passed as message'
      }
      return
    }

    if (message.length > 255) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'SMS messages are limited to 255 characters'
      }
      return
    }

    ctx.body = {
      code: Message.messageToCode(message)
    }
  }

  converToMessage(ctx) {
    const { code } = ctx.request.query

    if (!code) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'Nothing was passed as code'
      }
      return
    }

    ctx.body = {
      message: Message.codeToMessage(code)
    }
  }
}

module.exports = new MessageController()
