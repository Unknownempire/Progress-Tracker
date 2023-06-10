const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');


const html_path = path.join(__dirname,'public','index.html');
const faviconPath = __dirname + '/Img/progress.svg';
const css_path = path.join(__dirname,'css');
const img_path = path.join(__dirname,'Img');
app.use(favicon(faviconPath));
app.use(express.static(css_path));
app.use(express.static(img_path));
app.use(express.static(path.join(__dirname,'public')));

//start server
app.get('/',function(req,res) {
    res.sendFile(html_path);
});
// app.get('/index.html',function(req,res)  {
//     res.sendFile(html_path);
// })


app.listen(3000, () => {
    console.log('server is running');
})