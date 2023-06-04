const express = require('express');
const path = require('path');
const app = express();

//start server
const html_path = path.join(__dirname,'index.html');
app.get('/',function(req,res) {
    res.sendFile(html_path);
});


const css_path = path.join(__dirname,'css');
const img_path = path.join(__dirname,'Img');
app.use(express.static(css_path));
app.use(express.static(img_path));

app.listen(3000, () => {
    console.log('server is running');
})