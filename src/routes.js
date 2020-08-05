const Router = require('koa-router')

const MessageController = require('./entities/message/MessageController')

const router = new Router()

router.get('/convert-text', MessageController.convertToCode)
router.get('/convert-code', MessageController.converToMessage)

module.exports = router
