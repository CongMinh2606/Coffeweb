import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

//   constructor() { }

//   ngOnInit() {
//   }

// }

Coffe:Array<any>= [
  {
    id: 1,
    name: "Cà phê đá",
    price: "20.000 VND",
    image:"../assets/cfda.webp",
    weight: "1/ly ",
    describe: "Ngọt/Đắng/Đậm vị cà phê",

  },
  {
    id: 2,
    name: "Cà phê sữa đá",
    price:"20.000 VND",
    image:"../assets/caphesua.webp",
    weight: "1/ly ",
    describe: "Ngọt/Đắng/Đậm vị cà phê",

  },
  {
    id: 3,
    name: "Bạc Xỉu Nóng",
    price: "10.000 VND",
    image:"../assets/bacxiunong.webp",
    weight: "1/ly ",
    describe: "Ngọt/Đắng/Đậm vị cà phê",
    oder: false,
  },
  {
    id: 4,
    name: "Đen Nóng",
    price: "10.000 VND",
    image:"../assets/dennong.webp",
    weight: "1/ly ",
    describe: "Ngọt/Đắng/Đậm vị cà phê",

  },
]
}
