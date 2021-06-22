import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursApprenantComponent } from './cours-apprenant.component';

describe('CoursApprenantComponent', () => {
  let component: CoursApprenantComponent;
  let fixture: ComponentFixture<CoursApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
