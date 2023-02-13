import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CM Coffe';
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
      oder: false,
    },
    {
      id: 5,
      name: "Espresso Nóng",
      price: "10.000 VND",
      image:"../assets/espressonong.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
    {
      id: 6,
      name: "Caramelmacchiato Nóng",
      price: "10.000 VND",
      image:"../assets/caramelmacchiato.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
  ];
}
