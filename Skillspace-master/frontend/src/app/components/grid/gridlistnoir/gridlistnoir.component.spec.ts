import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlistnoirComponent } from './gridlistnoir.component';

describe('GridlistnoirComponent', () => {
  let component: GridlistnoirComponent;
  let fixture: ComponentFixture<GridlistnoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlistnoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlistnoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
