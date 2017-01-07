// import Shell from 'child_process'
Shell = require('child_process')

exports.postBuild = function (pages, callback) {
  Shell.execSync("cp -r static/* public/")
  callback()
}