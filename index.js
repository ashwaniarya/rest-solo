const fs = require('fs')
const yargs = require('yargs') 
yargs
	.command('init', 'To create a restsolo app')
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .argv

const argv = yargs.argv
console.log(argv._.length)
console.log(yargs.argv)

let argvCount = argv._.length

let server = "const express = require('express')\n\
let app = express()\n\
app.set('view engine','hbs')\n\
app.get('/',(req,res)=>{\n\
	res.send('You restsolo app is running')\n\
	})\n\
app.listen(8080,()=>{\n\
	console.log('you app is running on port 8080')\n\
})"

let view_admin = ""
if(argvCount === 1){
    let value = argv._[0]
    if(value === 'init'){
				console.log('Creating a rest soloapp, Please wait')
				fs.mkdirSync(__dirname+'/_solo/views')
				fs.writeFileSync('_solo/server.js',server)
    }
}
