const { environment } = require('@rails/webpacker')
const typescript = require('./loaders/typescript')
const customConfig = require('./custom')

environment.loaders.prepend('typescript', typescript)

// Merge custom config
environment.config.merge(customConfig)

module.exports = environment