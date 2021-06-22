import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridblancComponent } from './gridblanc.component';

describe('GridblancComponent', () => {
  let component: GridblancComponent;
  let fixture: ComponentFixture<GridblancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridblancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridblancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
