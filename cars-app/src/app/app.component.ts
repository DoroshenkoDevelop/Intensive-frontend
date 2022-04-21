import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "3.png",
      name: "Ferrari California",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "4.png",
      name: "Lamborghini Urus",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "5.png",
      name: "Audi R8",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "6.png",
      name: "Chevrolet Camaro",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "7.png",
      name: "Dodge Challenger",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "8.png",
      name: "Nissan GT-R ",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
    {
      image: "9.png",
      name: "Maserati Quattroporte",
      gear: "Полный",
      engine: 5.2,
      places: 2,
    },
  ];


  priceForm = this.fb.group({ //валидация форм
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {

  }

  goScroll(target:HTMLElement){
    target.scrollIntoView({behavior: "smooth"}); // скролинг
  }

  onSubmit(){
    if (this.priceForm.valid){
      alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
      this.priceForm.reset();
    }
  }
}
