module.exports.reply = require('./lib/reply_generator');
module.exports.validateObject = require('./lib/validate_object');
module.exports.createNavigator = require('./lib/navigator').create;
module.exports.saveFromLink = require('./lib/fs').saveFromLink;
module.exports.removeFile = require('./lib/fs').removeFile;

module.exports.sleep = function(ms){
    return new Promise((done, reject) => {
        setTimeout(done, ms);
    });
}