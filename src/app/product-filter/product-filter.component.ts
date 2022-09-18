import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { category } from 'src/models/category';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Output() change = new EventEmitter;

  category = category;
  selectedValue: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = category.phone
  }

  onChange(newValue: any) {
    this.change.emit(newValue);
  }

}
