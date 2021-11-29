import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirindiaComponent } from './airindia.component';

describe('AirindiaComponent', () => {
  let component: AirindiaComponent;
  let fixture: ComponentFixture<AirindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirindiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
