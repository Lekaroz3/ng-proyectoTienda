import { from } from "rxjs";
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class ZapatillaData implements InMemoryDbService{
    createDb(){
        let zapatillas = [
            {
                "id": 0,
                "nombre": 'Adidas boost',
                "descripcion": 'Muy comodas para ir a correr',
                "precio": 120,
                "urlImagen": 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
            },
            {
                "id": 1,
                "nombre": 'Adidas boost',
                "descripcion": 'Muy comodas para ir a correr',
                "precio": 120,
                "urlImagen": 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
            },
            {
                "id": 2,
                "nombre": 'Nike boost',
                "descripcion": 'Muy comodas para ir a correr',
                "precio": 120,
                "urlImagen": 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
            },
            {
                "id": 3,
                "nombre": 'Rebook boost',
                "descripcion": 'Muy comodas para ir a correr',
                "precio": 120,
                "urlImagen": 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
            },
            {
                "id": 4,
                "nombre": 'New boost',
                "descripcion": 'Muy comodas para ir a correr',
                "precio": 120,
                "urlImagen": 'https://www.roadrunningreview.com/Adidas-Ultraboost-20_1024_1_100663.jpg'
            }
            
        ];
        return {zapatillas:zapatillas};
    }
}