const express = require('express');

const Productos = require('./productos');
const productos = new Productos();

const port = 8080;
const app = express();
app.use =(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/productos", (req, res) => {
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


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});