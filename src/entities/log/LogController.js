const { BAD_REQUEST } = require('http-status-codes')

const LogService = require('./LogService')

class LogController {
  async list(ctx) {
    const { page, items, startDate, endDate } = ctx.request.query

    if (!page || !items) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: 'Missing required fields'
      }
      return
    }

    try {
      const haveDates = startDate && endDate
      const logs = haveDates
        ? await LogService.listWithDateFilter({ page, items, startDate, endDate })
        : await LogService.list({ page, items })

      ctx.body = {
        logs
      }
    } catch (err) {
      ctx.status = BAD_REQUEST
      ctx.body = {
        error: err
      }
    }
  }
}

module.exports = new LogController()
