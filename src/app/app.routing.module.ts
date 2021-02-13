import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CytoscapeTestComponent } from './cytoscape-test/cytoscape-test.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';

const routes: Routes = [
  { path: 'test-ng-model', component: TestNgModelComponent },
  { path: 'test-cytoscape', component: CytoscapeTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }