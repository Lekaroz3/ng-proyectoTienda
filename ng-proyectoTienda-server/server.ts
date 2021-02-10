var express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Zapatilla{
    constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public precio: number,
    public urlImagen: string
    ){}
    
}

const zapatillas: Zapatilla[] = [
    new Zapatilla(
        0,
        'Adidas boost',
        'Muy comodas para ir a correr',
        120,
        'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
    ),
    new Zapatilla(
        1,
        'Adidas superfake',
        'Muy comodas para pasear',
        60,
        'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
    )

]

function getZapatillas():any{
    return zapatillas;
}

app.use(function(req:any, res:any, next:any){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())

app.post('/zapatillas',bodyParser.json(),(req:any,res:any) => {
    let zapaNew = new Zapatilla(
        zapatillas.length+1,
        req.body.nombre,
        req.body.descripcion,
        req.body.precio,
        req.body.urlImagen
    );
    zapatillas.push(zapaNew);
    res.status(200).send({
        id:zapaNew.id,
        nombre: zapaNew.nombre,
        descripcion: zapaNew.descripcion,
        precio: zapaNew.precio,
        urlImagen: zapaNew.urlImagen
    })
})
app.get('/', (req: any, res: any) => {
    res.send('The URL of zapatillas is http://localhost:8000/zapatillas');
  });

app.get('/zapatillas',(req:any,res:any) => {
    res.json(getZapatillas());
});

function getZapatillasById(zapaId:number):any{
    let z:any;
    z = zapatillas.find(z=>z.id==zapaId);
    return z;
}

app.get('/zapatillas/:id',(req:any,res:any) => {
    res.json(getZapatillasById(parseInt(req.params.id)));
});

function updateZapatillaById(req:any, zapaId:number):any{
    let z:any;
    z = zapatillas.find(z=>z.id==zapaId);
    let index = zapatillas.indexOf(z);
    z.nombre = req.body.nombre,
    z.descripcion = req.body.descripcion,
    z.precio = req.body.precio,
    z.urlImagen = req.body.urlImagen
    
    zapatillas[index] = z;
    return z;
}

app.put('/zapatillas/:id', function(req:any, res:any){
    res.json(updateZapatillaById(req,parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});

function deleteZapatillaById(zapaId:number):any{
    let z:any;
    z = zapatillas.find(z=>z.id == zapaId);
    let index = zapatillas.indexOf(z);
    delete zapatillas[index];
    return z;
}

app.delete('/zapatillas/:id', function (req:any,res:any){
    res.json(deleteZapatillaById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});

const server = app.listen(8000, "localhost", () =>{
    const {address, port } = server.address();
    console.log("Listeninf on %s %s", address, port);
    
})

