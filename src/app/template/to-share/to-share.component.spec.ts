import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToShareComponent } from './to-share.component';

describe('ToShareComponent', () => {
  let component: ToShareComponent;
  let fixture: ComponentFixture<ToShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
