const jwt = require('jsonwebtoken')

const { compare } = require('../../utils/encrypt')
const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env

class AuthService {
  async validatePassword({ ctxPassword, storagedHash }) {
    return compare({ value: ctxPassword, hash: storagedHash })
  }

  async generateToken(id) {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME })
  }
}

module.exports = new AuthService()
