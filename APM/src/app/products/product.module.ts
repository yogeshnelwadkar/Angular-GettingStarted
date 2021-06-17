import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { productlistComponent } from './product-list/product-list.compoment';
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { starComponent } from './shared/star.component';
// import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { productlistComponent } from '../product-list/product-list.compoment';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { starComponent } from '../shared/star.component';
import { ProductDetailGuard } from './product-detail.guard';


@NgModule({
  declarations: [ productlistComponent , 
    ConvertToSpacesPipe,
    starComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterModule.forChild([
      {path:'products', component:productlistComponent},
        {
          path:'products/:id', 
        component:ProductDetailComponent,
        canActivate:[ProductDetailGuard]
      },
    
    ]),
  ]
})
export class ProductModule { }
