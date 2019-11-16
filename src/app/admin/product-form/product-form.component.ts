import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product = {};
  //id;

  constructor(
    private route: ActivatedRoute,
    private router: Router ,
    categoryService : CategoryService, 
    private productService : ProductService ) {
    this.categories$ = categoryService.getCategories();

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // if(id) 
    // this.productService.get(id)
    // .snapshotChanges().pipe(take(1))
    // .subscribe(p => console.log(p));

    if(id)
    this.productService.get(id)
    .snapshotChanges().pipe(take(1))
    .subscribe(p => {    console.log(p)      });
           
    }

    save(product){
      //console.log(product);
      this.productService.create(product);
      this.router.navigate(['/admin/products']);
    }
}
