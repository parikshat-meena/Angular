import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LoginComponent } from './components/login/login.component';
import { MyColorComponent } from './components/my-color/my-color.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { TaskComponent } from './components/task/task.component';
import { Task2Component } from './components/task2/task2.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  // {path:"",component:DataBindingComponent},//default routing
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"comp2",component:Comp2Component,canActivate:[AuthGuard]},
  {path:"ang-form",component:AngFormComponent,canActivate:[AuthGuard],children: [    //child routing
    {path:"utdf",component:UtdfComponent},
    {path:"rtf",component:RtfComponent}]
  },
  {path:"task",component: TaskComponent,canActivate:[AuthGuard]},
  {path:"directives",component:DirectivesComponent,canActivate:[AuthGuard]},
  {path:"my-color",component:MyColorComponent,canActivate:[AuthGuard]},
  {path:"task2",component:Task2Component,canActivate:[AuthGuard]},
  {path:"crud",canActivate:[AuthGuard],loadChildren: ()=> import('./crud/crud.module').then((m)=>m.CRUDModule)},// Lazy loading
  {path:"data-binding",component:DataBindingComponent,canActivate:[AuthGuard]},
  {path:"pipes",component:PipesComponent,canActivate:[AuthGuard]},
  {path:"pipes/:id",component:PipesComponent},//parameterised routing
  {path:"**",component:PageNotFoundComponent} //wild card routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
