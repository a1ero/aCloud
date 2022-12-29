const fs = require('fs')
const File = require('../models/File')
const config = require('config')

class FileService {

    createDir(file){
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        return new Promise(((resolve, rejects) => {
            try {
                if(!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'Файл создан'})
                } else {
                    return rejects({message: 'Такой файл уже создан'})
                }
            } catch (e){
                return rejects({message: "Ошибка файла"})
            }
        }))
    }
    
    getPath(file) {
        return config.get('filePath') + '\\' + file.user + '\\' + file.path
    }
}

module.exports = new FileService()