import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGifComponent } from './create-gif.component';

describe('CreateGifComponent', () => {
  let component: CreateGifComponent;
  let fixture: ComponentFixture<CreateGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
