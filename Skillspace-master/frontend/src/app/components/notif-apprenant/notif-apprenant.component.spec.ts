import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifApprenantComponent } from './notif-apprenant.component';

describe('NotifApprenantComponent', () => {
  let component: NotifApprenantComponent;
  let fixture: ComponentFixture<NotifApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
