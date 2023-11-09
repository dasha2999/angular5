import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  {path: "", component: CarsListComponent},
  {path: "cars", component: CarsListComponent},
  {path: "cars/:id", component: CarsListComponent},
  {path: "add", component: AddCarComponent},
  // {path: "car", component: CarComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
