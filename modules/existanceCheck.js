const fs = require('fs')
const path = require('path')

module.exports = (fileName) => fs.existsSync(path.join(__dirname, fileName))