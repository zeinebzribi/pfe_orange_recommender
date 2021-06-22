import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridgrisComponent } from './gridgris.component';

describe('GridgrisComponent', () => {
  let component: GridgrisComponent;
  let fixture: ComponentFixture<GridgrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridgrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridgrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
