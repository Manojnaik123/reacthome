const express=require('express');
const path=require('path')
const ejsMate=require('ejs-mate')
const bodyParser=require('body-parser')
const app=express()


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));
app.engine('ejs',ejsMate)

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true})); 

app.get('/home',(req,res)=>{
    res.render('pages/home.ejs')
})
app.get('/event',(req,res)=>{
    res.render('pages/events.ejs')
})
app.get('/event2',(req,res)=>{
    res.render('pages/events2.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('pages/contact')
})
app.get('/about',(req,res)=>{
    res.render('pages/about')
})
app.get('/events/:id',async(req,res)=>{
    const {id}=req.params
      res.render('pages/showevents')
})
app.get('/events2/:id',async(req,res)=>{
    const {id}=req.params
    res.render('pages/showevents2')
     
})
app.listen(3001,(req,res)=>{
    console.log('listening on port 3001');
})