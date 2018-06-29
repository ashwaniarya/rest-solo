const express = require('express')
let app = express()
app.get('/',(req,res)=>{
	res.send('You restsolo app is running')
	})
app.listen(8080,()=>{
	console.log('you app is running on port 8080')
})