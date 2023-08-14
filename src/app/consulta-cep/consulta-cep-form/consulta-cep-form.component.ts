import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmitirAlerta } from 'src/app/shared/helpers/sweet-alertas';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from './model/endereco.model';

@Component({
  selector: 'app-consulta-cep-form',
  templateUrl: './consulta-cep-form.component.html',
  styleUrls: ['./consulta-cep-form.component.css']
})
export class ConsultaCepFormComponent implements OnInit{

  @ViewChild('modalVisualizaEndereco') modalVisualizaEndereco!: TemplateRef<NgbModalRef>


  public existeLista: boolean;
  public acaoEdicao?: boolean;
  public endereco?: Endereco;

  constructor(
    private consultaCepService: ConsultaCepService,
    protected injector: Injector,
    private formBuilder: FormBuilder,
    protected modalService: NgbModal,
  ) { 
    this.existeLista = false
  }

  ngOnInit(): void {
  }

  formulario = this.formBuilder.group({
    cep: [null, Validators.required],
  });

  formularioEdicao = this.formBuilder.group({
    logradouro: [null, Validators.required],
    complemento: [null, Validators.required],
    localidade: [null, Validators.required],
    uf: [null, Validators.required],
  });
  

  obterEnderecos() {
    EmitirAlerta.AlertaCarregando();
    this.consultaCepService.obterCep(this.formulario.controls.cep.value).subscribe({
      next: (data) => {
        this.endereco = data
        this.formularioEdicao = data
        this.existeLista = true;
        EmitirAlerta.FecharAlertaCarregando();
      },
      error: () => {
        this.existeLista = false;
        this.acaoQuandoForError();
        EmitirAlerta.FecharAlertaCarregando();
      }
    })
  }

  acaoQuandoForError(mensagem?: string): any {
    if ((mensagem)) return EmitirAlerta.AlertaToastError(mensagem);
    return EmitirAlerta.AlertaToastError("Ocorreu um erro ao processar a sua solicitação!")
  }

  atribuirParaEditar() {
    this.modalService.open(this.modalVisualizaEndereco, { size: 'lg' })
    this.acaoEdicao = true
  }

  fecharModalBoleto(){
    this.modalService.dismissAll(this.modalVisualizaEndereco)
  }

  salvarEndereco() {

  }

}
