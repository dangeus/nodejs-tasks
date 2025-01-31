// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает true/false в зависимости
// от того существует или нет указанная папка
const checkExistence = require('./modules/existanceCheck')

console.log(checkExistence('test'))
console.log(checkExistence('testFile.txt'))