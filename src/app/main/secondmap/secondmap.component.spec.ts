import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmapComponent } from './secondmap.component';

describe('SecondmapComponent', () => {
  let component: SecondmapComponent;
  let fixture: ComponentFixture<SecondmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
