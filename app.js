//express app template 
const express = require('express');
const app = express();
const PORT = 80;
//ejs template and import
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));
app.use(express.json());
app.get('/', (req, res) => {
    //return a ejs template
    res.render('home');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})