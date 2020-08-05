const mongoose = require('mongoose')

const { uri, options } = require('../config/mongo')

console.log('trying to connect with MongoDB...')

mongoose.connect(uri, { ...options })

mongoose.connection.on('error', () => console.error('❌ an error occurred while attempting to connect'))

mongoose.connection.on('connected', () => console.log('✅ connection established'))
