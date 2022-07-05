import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAlunoComponent } from './consultar-aluno.component';

describe('ConsultarAlunoComponent', () => {
  let component: ConsultarAlunoComponent;
  let fixture: ComponentFixture<ConsultarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
