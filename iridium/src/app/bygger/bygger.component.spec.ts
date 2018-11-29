import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByggerComponent } from './bygger.component';

describe('ByggerComponent', () => {
  let component: ByggerComponent;
  let fixture: ComponentFixture<ByggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
