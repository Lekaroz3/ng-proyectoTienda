import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Zapatilla } from './zapatilla';

@Injectable({
    providedIn: 'root'  
})

export class ZapatillaService{
    private zapatillasUrl = 'http://localhost:8000/zapatillas';

    constructor(private http: HttpClient){}

    getZapatillas():Observable<Zapatilla[]>{
        return this.http.get<Zapatilla[]>(this.zapatillasUrl);
    }

    getMaxZapatillasId(): Observable<Zapatilla>{
        return this.http.get<Zapatilla[]>(this.zapatillasUrl).pipe
        (
            map(data => Math.max.apply(Math, data.map(function (o) {
                return o.id;                
            }))),
            catchError(this.handleError)

        );
    }

    getZapatillaById(id: number):Observable<Zapatilla>{
        const url = `${this.zapatillasUrl}/${id}`;
        return this.http.get<Zapatilla>(url);
    }

    createZapatilla(zapatilla: Zapatilla):Observable<Zapatilla>{
        const headers =  new HttpHeaders({'Content-Type': 'application/json'});
        zapatilla.id = null;
        return this.http.post<Zapatilla>(this.zapatillasUrl, zapatilla,{headers:headers})
        .pipe(
            tap(data=> console.log('createZapatilla: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    deleteZapatilla(id:number):Observable<{}>{
        const headers =  new HttpHeaders({'Content-Type': 'application/json'});
        const url = `${this.zapatillasUrl}/${id}`;

        return this.http.delete<Zapatilla>(url,{headers: headers})
        .pipe(
            tap(data=> console.log('deleteZapatilla ' + id)),
            catchError(this.handleError)
        );
    }

    updateZapatilla(zapatilla:Zapatilla):Observable<Zapatilla>{
        const headers =  new HttpHeaders({'Content-Type': 'application/json'});
        const url = `${this.zapatillasUrl}/${zapatilla.id}`;
        return this.http.put<Zapatilla>(url,zapatilla,{headers: headers})
        .pipe(
            tap(()=> console.log('updateZapatilla: ' + zapatilla.id)),
            map(()=> zapatilla),
            catchError(this.handleError)
        );
    }

    private handleError(err){
        let errorMessage: string;
        if (err.error instanceof ErrorEvent){
            errorMessage = `Error ocurrido: ${err.error.message}`;
        } else{
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`
        }
        console.error(err);
        return throwError(errorMessage);
    }
}