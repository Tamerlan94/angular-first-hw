import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbNavItem } from '@ng-bootstrap/ng-bootstrap';
import { category } from 'src/models/category';
import { product, products } from 'src/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: product[];
  filteredProducts: product[] = products

  constructor(private changeDetection: ChangeDetectorRef) {
    this.products = products;
  }

  ngOnInit(): void {
  }

  //не работает
  onChanged(value: any) {
    console.log(this.products)
    this.products.splice(0, this.products.length);
    this.filteredProducts = products.filter(item => item.category == value);
    for(let obj of this.filteredProducts){
      let o = Object.assign({}, obj);
      this.products.push(o);
    }
    this.changeDetection.detectChanges();
    console.log(this.products)
  }  
}
