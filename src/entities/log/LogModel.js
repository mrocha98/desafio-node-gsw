const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const logsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

logsSchema.plugin(mongoosePaginate)

const logsModel = mongoose.model('logs', logsSchema)

module.exports = logsModel
