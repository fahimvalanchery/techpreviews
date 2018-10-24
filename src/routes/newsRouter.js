const express = require('express');
const news_Router=express.Router();
const newsData = require('../model/newsModel');




function route(navigationBar){



news_Router.route('/')
            .get((req,res)=>{
                newsData.find()
                .then(function(post){
                    res.render('all_news',{post,navigationBar});  
                    
                });
              
    });



news_Router.route('/:id')
        .get((req,res)=>{
            const id=req.params.id;
            newsData.findOne({_id:id})
            .then(function(single){
                res.render(
                    'single_news',
                    {
                    navigationBar,single
                    });
            });
        });
    
return news_Router;
}
module.exports=route;