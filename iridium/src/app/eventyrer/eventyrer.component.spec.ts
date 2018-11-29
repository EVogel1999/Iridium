import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventyrerComponent } from './eventyrer.component';

describe('EventyrerComponent', () => {
  let component: EventyrerComponent;
  let fixture: ComponentFixture<EventyrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventyrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventyrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
