const express = require('express')
const hbs = require('hbs')

let app = express()
app.set('view engine','hbs')
app.set('views', __dirname + '/views');
app.get('/',(req,res)=>{
	res.render('index.hbs',{dir:__dirname})
	})


app.listen(8080,()=>{
	console.log('you app is running on port 8080')
})

