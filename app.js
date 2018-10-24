const express =require('express');
const path= require('path');
const app =new express();

const admin_newsRouter = require('./src/routes/admin_newsRouter');
const userRoutes = require('./src/routes/userRoutes');



app.use(express.static(path.join(__dirname,'public')));
app.set('views','./src/views');
app.set('view engine' , 'ejs');

const navigationBar=[
    {title:'Trends', link:'/'},
    {title:'News', link:'news'},
    {title:'Videos', link:'videos'},
    {title:'Gadgets', link:'gadgets'},
    {title:'Downloads', link:'downloads'}];



const news_Router=require('./src/routes/newsRouter')(navigationBar);
const videos_Router=require('./src/routes/videosRouter');

app.use('/news',news_Router);
app.use('/videos',videos_Router);
app.use('/admin/news',admin_newsRouter);
app.use('/admin/user',userRoutes);


app.get('/',(req,res)=>{
    res.render('index',{navigationBar});
});
app.route('/admin')
.get((req,res)=>{
    res.render('admin_index');
});


app.listen(3000,()=>{
    console.log("Listening to PORT 3000 ");
});