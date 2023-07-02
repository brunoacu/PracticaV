import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {
    path:'',
    component:ItemsComponent
  }, 
  {
    path:'/add',
    component: AddItemcomponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
