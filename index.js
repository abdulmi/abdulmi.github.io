var express = require('express')
var path = require('path')
var app = express()
var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, './')));
app.get('/',function(req,res){
  res.sendFile('index.html', {root: __dirname })
})

app.listen(port,function(){
  console.log("listening to 3000")
})
