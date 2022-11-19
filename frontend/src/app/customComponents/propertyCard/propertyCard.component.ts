import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyCard',
  templateUrl: './propertyCard.component.html',
  styleUrls: ['./propertyCard.component.css']
})
export class PropertyCardComponent implements OnInit {

Property: Array <any> =[
  {
  "id":1,
  "name":"Noman House",
  "type":"House",
  "price":"10btc"
}
]

  constructor() { }

  ngOnInit() {
  }

}
