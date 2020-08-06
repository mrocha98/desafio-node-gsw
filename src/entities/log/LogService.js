const { startOfDay, endOfDay, parseISO } = require('date-fns')

const Log = require('./LogModel')

class LogService {
  async register({ userId, message, code }) {
    return Log.create({ userId, message, code })
  }

  async list({ query = {}, page, items }) {
    return Log.paginate(query, { page, limit: items, sort: { createdAt: 'desc' } })
  }

  async listWithDateFilter({ page, items, startDate, endDate }) {
    const start = startOfDay(parseISO(startDate))
    const end = endOfDay(parseISO(endDate))
    return this.list({
      query: {
        createdAt: {
          $gte: start,
          $lte: end
        }
      },
      page,
      items
    })
  }
}

module.exports = new LogService()
