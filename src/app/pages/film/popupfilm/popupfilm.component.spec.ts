import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupfilmComponent } from 'src/app/film/popupfilm/popupfilm.component';

describe('PopupfilmComponent', () => {
  let component: PopupfilmComponent;
  let fixture: ComponentFixture<PopupfilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupfilmComponent]
    });
    fixture = TestBed.createComponent(PopupfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
