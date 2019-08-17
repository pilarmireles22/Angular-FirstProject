import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUsersComponent } from './detalles-users.component';

describe('DetallesUsersComponent', () => {
  let component: DetallesUsersComponent;
  let fixture: ComponentFixture<DetallesUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
