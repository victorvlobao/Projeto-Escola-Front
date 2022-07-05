import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAlunoComponent } from './account-aluno.component';

describe('AccountAlunoComponent', () => {
  let component: AccountAlunoComponent;
  let fixture: ComponentFixture<AccountAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
