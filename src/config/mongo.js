const { DATABASE_USER, DATABASE_PASS, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } = process.env

module.exports = {
  uri: `mongodb://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?authSource=admin`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}
