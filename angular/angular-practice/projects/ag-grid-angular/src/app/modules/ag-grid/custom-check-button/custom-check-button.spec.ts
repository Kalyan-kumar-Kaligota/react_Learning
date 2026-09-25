import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomCheckButton } from './custom-check-button';

describe('CustomCheckButton', () => {
  let component: CustomCheckButton;
  let fixture: ComponentFixture<CustomCheckButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomCheckButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCheckButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
