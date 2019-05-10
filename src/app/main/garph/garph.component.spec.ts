import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarphComponent } from './garph.component';

describe('GarphComponent', () => {
  let component: GarphComponent;
  let fixture: ComponentFixture<GarphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
