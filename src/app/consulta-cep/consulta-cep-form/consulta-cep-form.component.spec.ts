import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCepFormComponent } from './consulta-cep-form.component';

describe('ConsultaCepFormComponent', () => {
  let component: ConsultaCepFormComponent;
  let fixture: ComponentFixture<ConsultaCepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCepFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
