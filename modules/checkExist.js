const fs = require('fs')

module.exports = (fileName) => fs.existsSync(fileName) ? 1 : 0

