import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UbahComponent} from './ubah.component';

describe('UbahComponent', () => {
  let component: UbahComponent;
  let fixture: ComponentFixture<UbahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UbahComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
