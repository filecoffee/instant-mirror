/**
 * Based on https://stackoverflow.com/a/61844870/6257811 <3
 */

const fs = require('fs')
const request = require('request')
const path = require('path')

const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    if (err) return console.log(err)
    request(uri).pipe(fs.createWriteStream(path.join('/usr/src/app/mirror/repo', filename))).on('close', callback)
  })
}

module.exports = { download }
