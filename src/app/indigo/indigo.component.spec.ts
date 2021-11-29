import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigoComponent } from './indigo.component';

describe('IndigoComponent', () => {
  let component: IndigoComponent;
  let fixture: ComponentFixture<IndigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
