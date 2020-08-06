const Router = require('koa-router')

const validateAuth = require('./middlewares/validateAuth')
const logMessageOperation = require('./middlewares/logMessageOperation')

const AuthController = require('./entities/auth/AuthController')
const UserController = require('./entities/user/UserController')
const MessageController = require('./entities/message/MessageController')

const router = new Router()

router.post('/user', UserController.create)
router.post('/login', AuthController.login)

router.use(validateAuth)

router.delete('/user/:id', UserController.destroy)

router.get('/convert-text', logMessageOperation, MessageController.convertToCode)
router.get('/convert-code', logMessageOperation, MessageController.converToMessage)

module.exports = router
