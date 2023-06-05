const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');

//start server
app.get('/',function(req,res)  {
    res.sendFile(html_path);
})

const html_path = path.join(__dirname,'public','index.html');
app.get('/',function(req,res) {
    res.sendFile(html_path);
});

app.get('/index.html',function(req,res)  {
    res.sendFile(html_path);
})
// app.use(favicon(path.join(__dirname,'Img','progress.svg')));
const faviconPath = __dirname + '/Img/progress.svg';


// Use the serve-favicon middleware
app.use(favicon(faviconPath));


const css_path = path.join(__dirname,'css');
const img_path = path.join(__dirname,'Img');
app.use(express.static(css_path));
app.use(express.static(img_path));
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, () => {
    console.log('server is running');
})