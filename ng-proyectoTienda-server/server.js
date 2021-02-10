"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Zapatilla = /** @class */ (function () {
    function Zapatilla(id, nombre, descripcion, precio, urlImagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.urlImagen = urlImagen;
    }
    return Zapatilla;
}());
var zapatillas = [
    new Zapatilla(0, 'Adidas boost', 'Muy comodas para ir a correr', 120, 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'),
    new Zapatilla(1, 'Adidas superfake', 'Muy comodas para pasear', 60, 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg')
];
function getZapatillas() {
    return zapatillas;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/zapatillas', bodyParser.json(), function (req, res) {
    var zapaNew = new Zapatilla(zapatillas.length + 1, req.body.nombre, req.body.descripcion, req.body.precio, req.body.urlImagen);
    zapatillas.push(zapaNew);
    res.status(200).send({
        id: zapaNew.id,
        nombre: zapaNew.nombre,
        descripcion: zapaNew.descripcion,
        precio: zapaNew.precio,
        urlImagen: zapaNew.urlImagen
    });
});
app.get('/zapatillas', function (req, res) {
    res.json(getZapatillas());
});
function getZapatillasById(zapaId) {
    var z;
    z = zapatillas.find(function (z) { return z.id == zapaId; });
    return z;
}
app.get('/zapatillas/:id', function (req, res) {
    res.json(getZapatillasById(parseInt(req.params.id)));
});
function updateZapatillaById(req, zapaId) {
    var z;
    z = zapatillas.find(function (z) { return z.id == zapaId; });
    var index = zapatillas.indexOf(z);
    z.nombre = req.body.nombre,
        z.descripcion = req.body.descripcion,
        z.precio = req.body.precio,
        z.urlImagen = req.body.urlImagen;
    zapatillas[index] = z;
    return z;
}
app.put('/zapatillas/:id', function (req, res) {
    res.json(updateZapatillaById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteZapatillaById(zapaId) {
    var z;
    z = zapatillas.find(function (z) { return z.id == zapaId; });
    var index = zapatillas.indexOf(z);
    delete zapatillas[index];
    return z;
}
app.delete('/zapatillas/:id', function (req, res) {
    res.json(deleteZapatillaById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log("Listeninf on %s %s", address, port);
});
