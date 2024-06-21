import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILoveYouFormComponent } from './ilove-you-form.component';

describe('ILoveYouFormComponent', () => {
  let component: ILoveYouFormComponent;
  let fixture: ComponentFixture<ILoveYouFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ILoveYouFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ILoveYouFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
