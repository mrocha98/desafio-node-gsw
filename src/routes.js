const Router = require('koa-router')

const validateAuth = require('./middlewares/validateAuth')
const logMessageOperation = require('./middlewares/logMessageOperation')

const AuthController = require('./entities/auth/AuthController')
const UserController = require('./entities/user/UserController')
const MessageController = require('./entities/message/MessageController')
const LogController = require('./entities/log/LogController')

const router = new Router()

router.post('/user', UserController.create)
router.post('/login', AuthController.login)

router.use(validateAuth)

router.delete('/user/:id', UserController.destroy)

router.get('/convert-text', logMessageOperation, MessageController.convertToCode)
router.get('/convert-code', logMessageOperation, MessageController.converToMessage)

router.get('/logs', LogController.list)

module.exports = router
