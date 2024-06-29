import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonComponent } from './input-button-component.component';

describe('InputButtonComponentComponent', () => {
  let component: InputButtonComponent;
  let fixture: ComponentFixture<InputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
