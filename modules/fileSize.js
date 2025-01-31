const fs = require('fs')
const path = require('path')

module.exports = function (fileName) {
    const filePath = path.join(__dirname, fileName)

    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)

        return stats.size
    } else {
        console.log('Такого файла не существует')
    }
}