const fs = require('fs')
module.exports = function(){
         //async
        fs.readdir(__dirname, function(err,result){// by convention you put err first
            if (err){
                throw err
            } else{
              console.log(result)
              process.stdout.write('\nprompt >') //nmake sure it's after
              }
            })      
}