import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdatacomponentComponent } from './filterdatacomponent.component';

describe('FilterdatacomponentComponent', () => {
  let component: FilterdatacomponentComponent;
  let fixture: ComponentFixture<FilterdatacomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterdatacomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterdatacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
