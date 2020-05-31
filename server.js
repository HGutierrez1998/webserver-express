const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

// Cargar contenido estatico 'UN HTML'
app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'Hector'
    });
}); 

app.get('/about', function (req, res) {

    res.render('about/about', {
        nombre: 'Hector'
    });
});
 
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});