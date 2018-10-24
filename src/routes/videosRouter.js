const express = require('express');
const videosRouter = express.Router();

videosRouter.route('/')
.get((req,res)=>{
res.send("inside video");
})

module.exports=videosRouter;