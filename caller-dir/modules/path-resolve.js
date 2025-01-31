const path = require('path')

module.exports = (folderName = 'test')=> path.join(__dirname, folderName)