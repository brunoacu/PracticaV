import { Component } from '@angular/core';
import{Item }from "../../models/item"
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items:Item[]=[];
  constructor(){}
  ngOnInit():void{
    this.items=[  
      {
        id:0,
        title:"manzana",
        price:10.5,
        quiantity:4,
        completed:false
      },
      {
        id:1,
        title:"pan",
        price:3.5,
        quiantity:8,
        completed:true
      },
    ]
  }
}
