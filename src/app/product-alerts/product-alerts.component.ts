import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  // he tenido que hacer un update en el angular core y ha pasado de {Component} a {Component , Input}
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
