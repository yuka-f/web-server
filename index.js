const { static } = require('express');
const express = require('express')
const path = require("path")
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")))

// app.get('/', function (req, res) {
//     console.log(req);
//   res.send('<h1>top</h1>');
// })
 
app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if(answer === "ゆか") {
        // res.send("ok!");
        res.redirect("/correct.html")
    }else{
        // res.send("no!");
        res.redirect("/wrong.html")
    }
    res.send(answer);
  });

app.get('/api/v1/users', function (req, res) {
    res.send({
        name:"yuka",
        age:26
    });
  });


const PORT = process.env.PORT || 30001;
app.listen(PORT,function(){
    console.log("I am running!")
});
