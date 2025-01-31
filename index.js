// Создайте анонимный модуль, который принимает имя файла и возращает 1/0 в зависимости от того существует или нет
// указанный файл
const checkExistance = require('./modules/checkExist')

console.log(checkExistance('index.js'))