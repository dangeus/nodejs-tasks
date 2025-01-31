// Создайте анонимный модуль в данном файле, который приниматет имя файла и возвращает его размер, если файла нет
// возвращает 0
const checkFileSize = require('./modules/fileSize')

console.log(checkFileSize('text.txt'))