import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBarComponent } from './browse-bar.component';

describe('BrowseBarComponent', () => {
  let component: BrowseBarComponent;
  let fixture: ComponentFixture<BrowseBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
