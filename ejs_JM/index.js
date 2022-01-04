const express = require('express');

const Productos = require('./productos');
const productos = new Productos();

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/productos', (req, res) => {
    const prods = productos.getProductos();
    res.render('productos', {
        productos: prods,
        hayProductos: prods.length
    });
})

app.post('/productos', (req, res) => {
    const producto = req.body;
    productos.saveProducto(producto);
    res.redirect('/');
})

app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080');
})