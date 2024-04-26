import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustinComponent } from './austin.component';

describe('AustinComponent', () => {
  let component: AustinComponent;
  let fixture: ComponentFixture<AustinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AustinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
