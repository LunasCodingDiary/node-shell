const pwd=require('./pwd.js')
const ls= require('./ls.js')

process.stdout.write('prompt >');
process.stdin.on('data', data=>{
    const cmd = data.toString().trim();
    if (cmd==='pwd'){
    process.stdout.write(`${pwd}\n`) //not async
    process.stdout.write('\nprompt >')
    }
    if (cmd==='ls'){  //async 
    ls() //in control of print out result and go next
    }
    else {
        process.stdout.write('You typed: ' + cmd);
     }
    //process.stdout.write('\nprompt >')
})



