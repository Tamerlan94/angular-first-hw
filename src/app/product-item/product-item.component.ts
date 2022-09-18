import { Component, Input, OnInit } from '@angular/core';
import { category } from 'src/models/category';
import { product } from 'src/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() id : number | undefined;
  @Input() name : string | undefined;
  @Input() description : string | undefined;
  @Input() image : string | undefined;
  @Input() category : category | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
