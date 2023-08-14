import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consulta-cep' },
  {
    path: 'consulta-cep',
    loadChildren: () =>
      import('./consulta-cep/consulta-cep.module').then((m) => m.ConsultaCepModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
