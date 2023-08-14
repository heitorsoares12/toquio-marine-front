import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ConsultaCepFormComponent } from './consulta-cep-form/consulta-cep-form.component';
import { ConsultaCepRoutingModule } from './consulta-cep-routing.module';



@NgModule({
  declarations: [
    ConsultaCepFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsultaCepRoutingModule
  ]
})
export class ConsultaCepModule { }
