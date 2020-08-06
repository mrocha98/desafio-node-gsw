const Router = require('koa-router')

const UserController = require('./entities/user/UserController')
const MessageController = require('./entities/message/MessageController')

const router = new Router()

router.post('/user', UserController.create)
router.delete('/user/:id', UserController.destroy)

router.get('/convert-text', MessageController.convertToCode)
router.get('/convert-code', MessageController.converToMessage)

module.exports = router
