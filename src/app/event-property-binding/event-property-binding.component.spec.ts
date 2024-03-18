import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPropertyBindingComponent } from './event-property-binding.component';

describe('EventPropertyBindingComponent', () => {
  let component: EventPropertyBindingComponent;
  let fixture: ComponentFixture<EventPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventPropertyBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
