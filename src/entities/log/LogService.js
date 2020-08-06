const Log = require('./LogModel')

class LogService {
  async register({ userId, message, code }) {
    return Log.create({ userId, message, code })
  }
}

module.exports = new LogService()
