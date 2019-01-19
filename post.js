const express=require('express');
const logger=require('./testing');
const app=express();
//app.use(logger);
// app.use(function(re,res,next){
//     console.log("logged");
//     next();
// });
var movies={"m":[{
    "name":"Harry Potter",
     "genre":"drama"
},
{
    "name":"Anna Bella",
    "genre":"horror"
},
{
    "name":"Equilizer",
    "genre":"action"
},
{
    "name":"Taken",
    "genre":"action"
},
{
    "name":"Jack and jill",
    "genre":"comedy"
},
{
    "name":"Harry Potter",
    "genre":"horror"
},
{
    "name":"Conjuring",
    "genre":"horror"
}
]
}



var ans=[];
app.get('/:genre',logger,function(req, res){
    var x= req.params.genre;
    var count=0;
    for(var i=0;i<movies.m.length;i++){
        if(movies.m[i].genre==x){
            console.log(movies.m[i].name);
            ans.push({"name":movies.m[i].name});
            count++;
        }
    }
    //res.send(); 
    if(count==0){
        res.status(400).send("Bad Request");
        return;
    }
    res.send(ans);
});



var w = "shukla";
module.exports.sagar=movies;
app.listen(3000)