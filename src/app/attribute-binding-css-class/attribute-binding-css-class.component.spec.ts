import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingCssClassComponent } from './attribute-binding-css-class.component';

describe('AttributeBindingCssClassComponent', () => {
  let component: AttributeBindingCssClassComponent;
  let fixture: ComponentFixture<AttributeBindingCssClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeBindingCssClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeBindingCssClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
