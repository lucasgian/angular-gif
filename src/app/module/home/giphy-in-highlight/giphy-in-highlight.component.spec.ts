import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyInHighlightComponent } from './giphy-in-highlight.component';

describe('GiphyInHighlightComponent', () => {
  let component: GiphyInHighlightComponent;
  let fixture: ComponentFixture<GiphyInHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyInHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyInHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
