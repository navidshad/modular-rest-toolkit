const fs = require('fs');
const fse = require('fs-extra');
const request  = require('request');

async function saveFromLink(link, savePath)
{
    return new Promise( async (resolve, reject) => 
    {
        await fse.ensureFile(savePath).catch(reject);

        var stream = fs.createWriteStream(savePath);
        stream.on('close', (e) =>{
            if(e) reject(e);
            else resolve();
        });
    
        request(link).pipe(stream);
    });
}

function removeFile(path)
{
    return new Promise((resolve, reject) => 
    {
        fs.unlink(path, (err) => { 
            if(err) reject(err);
            else resolve(true);
        });
    });
}

module.exports = {
    saveFromLink, removeFile
}