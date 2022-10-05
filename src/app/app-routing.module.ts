import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent} from './photo/photo.component';
import { HomeComponent} from './home/home.component'

const routes: Routes = [
{
path:'photo/:id',
component:PhotoComponent
},
{
path:'',
component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
