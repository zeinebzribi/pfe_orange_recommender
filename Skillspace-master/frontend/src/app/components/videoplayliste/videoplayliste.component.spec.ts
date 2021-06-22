import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplaylisteComponent } from './videoplayliste.component';

describe('VideoplaylisteComponent', () => {
  let component: VideoplaylisteComponent;
  let fixture: ComponentFixture<VideoplaylisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoplaylisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplaylisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
