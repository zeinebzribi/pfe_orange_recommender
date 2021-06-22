import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierinfoComponent } from './modifierinfo.component';

describe('ModifierinfoComponent', () => {
  let component: ModifierinfoComponent;
  let fixture: ComponentFixture<ModifierinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
