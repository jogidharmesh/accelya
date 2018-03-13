import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoditycomponentComponent } from './comoditycomponent.component';

describe('ComoditycomponentComponent', () => {
  let component: ComoditycomponentComponent;
  let fixture: ComponentFixture<ComoditycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoditycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoditycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
