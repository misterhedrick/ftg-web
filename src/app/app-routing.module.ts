import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TagsComponent } from './components/tags/tags.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tags', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
