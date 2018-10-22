// file system for reading settings 
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const NodeProgram = process.argv[2]

// Check for the first process argument to be init
if ( NodeProgram === "init" ){
  // check for a package.JSON 
  if(fs.existsSync('./package.json')){
  console.log('package.json found');
  // if the package exists, the program will exit 
  process.exit();   
  } else{
    rl.question('What is your package name? ', (packageName) => {
      rl.question(" what is your description?", (description)=>{
        rl.question("what's your keyword? ", (keyword)=>{
          rl.question("Who published this package?", (author)=>{
            rl.question("can I have yo numba?",(wannadate)=>{
              console.log(`${packageName}`);
              console.log(`${description}`);
              console.log(`${keyword}`);
              console.log(`${author}`);
              console.log(`${wannadate}`);
             // json strings
              const jsonObject={
                packageName:"PackageName",
                description:"Description",
                keyword:"keyword",
                author:"author",
                wannadate:"wannadate"
              }
              fs.writeFile('package.json', JSON.stringify(jsonObject, null, 3));
              rl.close()
            })
          })
        })
      });
    });
    
  }
}


