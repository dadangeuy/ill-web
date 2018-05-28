import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerpanjanganComponent} from './perpanjangan.component';

describe('PerpanjanganComponent', () => {
  let component: PerpanjanganComponent;
  let fixture: ComponentFixture<PerpanjanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerpanjanganComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpanjanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
