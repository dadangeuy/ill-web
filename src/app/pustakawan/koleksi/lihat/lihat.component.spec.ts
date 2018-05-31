import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LihatComponent} from './lihat.component';

describe('LihatComponent', () => {
  let component: LihatComponent;
  let fixture: ComponentFixture<LihatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LihatComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LihatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
