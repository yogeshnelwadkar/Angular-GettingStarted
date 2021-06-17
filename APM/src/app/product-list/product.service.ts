import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import { catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductService{

    private productUrl = 'api/products/products.json';

    constructor (private http:HttpClient)
{

}    
private handleError(err : HttpErrorResponse){
    let errormessage = '';
    if(err.error instanceof ErrorEvent){
        errormessage = `An error occured: ${err.error.message}`;
    }
    else{
        errormessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }
    console.error(errormessage);

    return throwError(errormessage);
}
    getProducts(): Observable<IProduct[]>{
            return this.http.get<IProduct[]>(this.productUrl).pipe(
                tap(data => console.log('All', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }
}