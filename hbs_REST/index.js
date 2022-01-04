const express = require ('express');
const handlebars = require ('express-handlebars');
const Productos = require('./productos');

const productos = new Productos();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
const port = 8080;



app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts/'
    })
)
 

app.get("/productos", (req, res) => {
    const prods = productos.getProductos();

    res.render('productos', {
        productos: prods,
        hayProductos: prods.length
    });
})

app.post('/productos', (req, res) => {
    productos.saveProducto(req.body);
    res.redirect('/productos');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
