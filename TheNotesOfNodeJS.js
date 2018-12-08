
//Callback
/*
var delay = (seconds, callback) => {
    setTimeout(callback,seconds * 1000);
};

delay(1, () => {
    console.log('One sec');
    delay(1,() => {
        console.log('Two sec');
        delay(1,()=>{
            console.log('Three sec');
        })
    })
});
*/

//Promise
//1
/*var delay = (seconds) => new Promise((resolves,rejects) => {
    setTimeout(resolves, seconds*1000);
});

delay(1)
    .then(() => console.log('the delay has ended'));


console.log('end first tick');
*/

//2
/*
var delay = (seconds) => new Promise((resolves,rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
});

delay(1)
    .then(console.log);

console.log('end first tick');
*/

//3 Error
/*
var delay = (seconds) => new Promise((resolves,rejects) => {

    if (seconds > 3){
        rejects(new Error(`${number} is too long!`))
    }

    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
});

delay(4)
    .then(console.log)
    .then(() => 42)
    .then((number) => console.log(`Hello World: ${number}`))
    .catch((error) => console.log(`error: ${error.message}`));

console.log('end first tick');
*/


//Promisify callback and promise together
//Turning callback into promise
/*
var {promisify} = require('util');

var delay = (seconds,callback) => {

    if (seconds > 3){
        callback(new Error(`${seconds} is too long!`))
    }else {
        setTimeout(() =>
                callback(null, `the ${seconds} second delay is over`),
            seconds
        );
    }
}

var promiseDelay = promisify(delay);

promiseDelay(1)
    .then(console.log)
    .catch((error) => console.log(`error: ${error.message}`));
*/

// Node JS filesystem module fs
/*var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile);

writeFile('sample.txt','This is a sample')
    .then(() => console.log('File successfully created'))
    .catch((error) => console.log('error creating file'));
    */


//ASYNC FUNC

var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var fs = promisify(fs.unLink);
var fs = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves,seconds*1000)
})

async function start(){
    var files = await readdir(__dirname);
    console.log(files);
}

start();