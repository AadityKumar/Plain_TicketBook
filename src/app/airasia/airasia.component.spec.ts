import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirasiaComponent } from './airasia.component';

describe('AirasiaComponent', () => {
  let component: AirasiaComponent;
  let fixture: ComponentFixture<AirasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirasiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
