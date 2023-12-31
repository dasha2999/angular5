import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from "./car-detail/car-detail.component"
import { LoginComponent } from './login/login.component';
import { addGuard } from './add.guard';


const routes: Routes = [
  {path: "",component: CarsListComponent},
  {path: "cars",component:CarsListComponent},
  {path: "cars/:id", component:CarDetailComponent},
  {path:"add", component: AddCarComponent, canActivate: [addGuard]},
  // {path:"car", component: CarComponent}, вместо этого третья строчка
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: ""}
// redirect переправляет в корень
];
//  в path прописывается коренной маршрут
// **- любая последовательность  если стоит вначале, то больше никуда не попасть
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
