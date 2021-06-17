import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
     
    templateUrl : './product-list.component.html',
    styleUrls:['./product-list.component.css']

})
export class productlistComponent implements OnInit, OnDestroy{
    pageTitle:string = 'Product List';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage : boolean = false;
    errorMessage : string="";
    sub!: Subscription;
    
    constructor(private productService: ProductService){

    }
    
    private _listFilter:string='';
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value){
      this._listFilter =value;
      console.log('In Setter:' , value);
      this.filteredProducts = this.performFilter(value);
    }

  filteredProducts:IProduct[]=[];
  products: IProduct[] =[]; 

    toggleImage():void{
      this.showImage=!this.showImage;
    }
    ngOnInit():void{
      console.log('ngOnint');
     this.sub =  this.productService.getProducts()
      .subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err =>  this.errorMessage  = err
      });

    }
    ngOnDestroy (){
      this.sub.unsubscribe();
    }
    performFilter(filterBy: string):IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct)=>
      product.productName.toLocaleLowerCase().includes(filterBy));
    }
    onRatingClicked(message: string){
      this.pageTitle = 'Product List:' + message;
    }
}