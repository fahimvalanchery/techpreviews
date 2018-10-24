const express = require('express');
const newsData = require('../model/newsModel');

const admin_newsRouter = express.Router();


admin_newsRouter.route('/add')
.get((req,res)=>{
    res.render('add_news');
});


admin_newsRouter.route('/submit_add')
    .get((req,res)=>{
        var item={
            heading:req.param('heading'),
            short_desc:req.param('short_desc'),
            long_desc:req.param('long_desc')
        }
        var newsDetails= new newsData(item);
        newsDetails.save();
        res.send("submited");
    });







admin_newsRouter.route('/view')
.get((req,res)=>{
   newsData.find()
   .then(function(post){
       res.render('view_news',{post});
   });
});

admin_newsRouter.route('/:id')
        .get((req,res)=>{
            const id=req.params.id;
            newsData.findOne({_id:id})
            .then(function(err,single){
                res.render(
                    'update_news',
                    {
                    single
                    });
            });
        });

admin_newsRouter.route('/update/:id')
        .get((req,res)=>{
            const id=req.params.id;
            newsData.findOne({_id:id})
            .then(function(err,foundObject){
                if(err)
                {
                    res.send("error");
                }
                else{
                    if(!foundObject)
                    {res.send("not found")}
                    else
                    {
                        if(req.body.heading)
                        {foundObject.name=req.body.name}
                        if(req.body.short_desc)
                        {foundObject.short_desc=req.body.short_desc}
                        if(req.body.long_desc)
                        {foundObject.long_desc=req.body.long_desc}

                        foundObject.save(function(err , updatedObject){
                            if(err) 
                            {res.send("error in update")}
                            else
                            {res.send(updatedObject)}
                        });
                    }
                }
            });
        });

admin_newsRouter.route('/update')
.get((req,res)=>{
    var item={
        heading:req.param('heading'),
        short_desc:req.param('short_desc'),
        long_desc:req.param('long_desc')
    }
    var newsDetails= new newsData(item);
    newsDetails.save();
    res.render('update_news');
});






// admin_newsRouter.route('/delete')
// .get((req,res)=>{
//     var item={
//         heading:req.param('heading'),
//         short_desc:req.param('short_desc'),
//         long_desc:req.param('long_desc')
//     }
//     var newsDetails= new newsData(item);
//     newsDetails.save();
//     res.send("Deleted");
// });



module.exports=admin_newsRouter;