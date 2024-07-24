import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menu1 = 'WEB 208';
  menu2 = 'Ngoc';
  menu3 = 'ANC';
  product = [{
    title: "Đầm Nữ 2 Dây Satin Suông Trơn Phối Voan Form Straight - 10F23DREW002",
    image:"https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/d/a/dam-nu-29-10f23drew002_black_1__1_jpg.webp",
    price: "56.000 ₫"
  },
  {
    title: "Đầm Nữ 2 Dây Satin Suông Trơn Phối Voan Form a",
    image:"https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/d/a/dam-nu-29-10f23drew005-red-_1__1_jpg.webp",
    price: "53.000 ₫"
  },
  {
    title: "Đầm Nữ 2 Dây Satin Suông Trơn Phối Voan Form Straight - 10F23DREW002",
    image:"https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/d/a/dam-nu-29-10f23drew002_black_1__1_jpg.webp",
    price: "88.000 ₫"
  },
  {
    title: "Đầm Nữ 2 Dây Satin Suông Trơn Phối Voan Form Straight - 10F23DREW002",
    image:"https://routine.vn/media/amasty/webp/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/d/a/dam-nu-29-10f23drew002_black_1__1_jpg.webp",
    price: "83.000 ₫"
  }
];
}
