import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  Coffe:Array<any> = [
    {
      id: 1,
      name: "Cà phê đá",
      price: "20.000 VND",
      image:"../assets/cfda.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
    {
      id: 2,
      name: "Cà phê sữa đá",
      price:"20.000 VND",
      image:"../assets/caphesua.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },]

}
