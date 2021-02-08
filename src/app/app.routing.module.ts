import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';

const routes: Routes = [
  { path: 'test-ng-model', component: TestNgModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }