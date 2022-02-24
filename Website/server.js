


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')

//Loading the Data here
var postData = require('./postData.json');
console.log(postData)

const { O_NONBLOCK } = require('constants');
//console.log("== postData:", postData)

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars',exphbs.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')

/*app.get('/', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/index.html');
});*/


app.get('/', function (req, res, next) {
  //var posts = req.params.person.toLowerCase();
  //var postsnData = postsData
  //console.log("  -- postsData:", postsnData)
  res.status(200).render("photoPage", {
    Posts: postData,
    showModal: true,
    singlePost:false,
    multiplePost: true
  })


});




app.get('/posts/:index',(req,res,next)=>{
	const ind = parseInt(req.params.index);
	if(ind ===0||!ind){
		next();
	}
	if(ind > -1 && ind < postData.length){
		res.status(200).render("photoPage",{
			Posts: [postData[ind]],
      showModal: false,
      singlePost:true

		})
	}
	else{
		next();
	}
})


app.use(express.static('public'));

app.get('*', function (req, res) {
  //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.status(404).render('404',{
    path: req.url
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
