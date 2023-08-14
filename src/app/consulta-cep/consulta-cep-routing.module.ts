import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCepFormComponent } from './consulta-cep-form/consulta-cep-form.component';

const routes: Routes = [{ path: '', component: ConsultaCepFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaCepRoutingModule {}
