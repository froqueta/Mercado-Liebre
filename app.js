const express = require('express')

const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname, './Public');
app.use(express.static("Public"))

app.listen(process.env.PORT || 3000, () => {
console.log ('Servidor corriendo en el puerto 3000');
}
);

app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname, './view/home.html'))    
});

app.get('/register',(req, res) => {
    res.sendFile(path.resolve(__dirname, './view/register.html'))    
});

app.get('/login',(req, res) => {
    res.sendFile(path.resolve(__dirname, './view/login.html'))    
});